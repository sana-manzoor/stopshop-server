const products=require('../model/prodSchema')



exports.allcprod = async (req, res) => {
    console.log("Inside specific category products")
    const {id}=req.params
    console.log(id)

    try {
        const data = await products.find({cid:id})
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
        console.log(err)
    }
 }

 
exports.allsprod = async (req, res) => {
    console.log("Inside specific category products")
    const {id}=req.params
    console.log(id)

    try {
        const data = await products.find({sid:id})
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
        console.log(err)
    }
 }



exports.viewproduct = async (req,res)=>{
    const {id}=req.params
    try{
        console.log("inside productview")
        const result=await products.find({_id:id})
        console.log(result)
        res.status(200).json(result)
    }
    catch(err){
        res.status(401).json(err)
    }
}


 exports.latestp = async (req, res) => {
    console.log("Inside prodlist");

    try {
        // Fetch random products using aggregation
        const data = await products.aggregate([
            { $sample: { size: 4 } } 
        ]);

        console.log(data);
        res.status(200).json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while fetching products." });
    }
};




