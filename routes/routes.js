const express=require('express')

const usercontroller=require('../controller/userController')
const categoryController=require('../controller/categoryController')
const subcategoryController=require('../controller/subcategoryController')
const prodController=require('../controller/prodController')

const router=new express.Router

router.post('/login',usercontroller.login)
router.get('/cat',categoryController.allcat)
router.get('/subcat/:id',subcategoryController.allsubcat)
router.get('/getcprod/:id',prodController.allcprod)
router.get('/getsprod/:id',prodController.allsprod)



module.exports=router
