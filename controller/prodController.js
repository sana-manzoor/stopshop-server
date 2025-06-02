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