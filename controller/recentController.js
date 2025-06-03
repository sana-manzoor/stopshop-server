const recents = require('../model/recentSchema')

exports.addrecent = async (req, res) => {
    console.log("inside recent")
    const { pid, title, price, image, uid } = req.body

    try {
        const excistingProduct = await recents.findOne({ pid, uid })
        if (excistingProduct) {
            res.status(406).json("Product already excists in recents")
        }
        else {
            const newItem = new recents({ pid, title, price, image, uid })
            await recents.updateOne(
                { pid, uid },
                { $setOnInsert: { title, price, image } },
                { upsert: true }
            );
        }
    }
    catch (err) {
        res.status(404).json(err)
    }


}


exports.getrecents = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    console.log("inside recents list");
    const allRecents = await recents.find({ uid: id }).sort({ updatedAt: -1 });

    // delt older records beyond the latest 10
    const idsToDelete = allRecents.slice(10).map(entry => entry._id);
    if (idsToDelete.length > 0) {
      await recents.deleteMany({ _id: { $in: idsToDelete } });
    }

    // take only the latest 4
    const latestFour = allRecents.slice(0, 5);

    res.status(200).json(latestFour);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recents" });
  }
};