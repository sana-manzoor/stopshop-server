const users=require('../model/userSchema')
const jwt=require('jsonwebtoken')


exports.login = async (req, res) => {
    console.log("inside login function!")
    const { phone, password } = req.body
    console.log(`${phone},${password}`)
    try {
        const excistingUser = await users.findOne({ phone, password })
        console.log(excistingUser)
        if (excistingUser) {
         
            const token = jwt.sign({ userId: excistingUser._id }, "secretid")
            console.log(excistingUser)
            res.status(200).json({
                excistingUser,
                role: "user",
                token
            })
        }
        else {
            res.status(406).json("Invalid Email/Password!!")
        }
    }
    catch (err) {
        res.status(500).json("Something Went Wrong!!" + err)
    }
}
