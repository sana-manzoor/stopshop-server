const subcategories=require('../model/subcategorySchema')

exports.allsubcat = async (req, res) => {
    console.log("Inside subcategorylist")
    const {id}=req.params
    console.log(id)

    try {
        const data = await subcategories.find({cid:id})
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
        console.log(err)
    }
 }