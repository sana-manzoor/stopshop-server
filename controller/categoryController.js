const categories=require('../model/categorySchema')

exports.allcat = async (req, res) => {
    console.log("Inside categorylist")
    console.log(req.payload)
    try {
        const data = await categories.find()
        console.log(data)
        res.status(200).json(data)

    }
    catch (err) {
        res.status(401).json(err)
    }
 }