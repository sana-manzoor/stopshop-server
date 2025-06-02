const wishes=require('../model/wishSchema')

exports.addToWish=async(req,res)=>{
    const {pid,title,price,image,uid}=req.body
    
    try{
        const excistingProduct=await wishes.findOne({pid,uid})
        if(excistingProduct){
            res.status(406).json("Product already excists in wishlist")
        }
        else{
            const newItem=new wishes({pid,title,price,image,uid})
            newItem.save()
            res.status(201).json(newItem)
        }
    }
    catch(err){
        res.status(404).json(err)
    }

    
}


exports.getwishlist = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        console.log("inside viewwish")
        const result = await wishes.find({ uid: id })
        console.log(result)
        res.status(200).json(result)
    }
    catch (err) {
        res.status(401).json(err)
        console.log(err)
    }
}
