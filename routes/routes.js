const express=require('express')

const usercontroller=require('../controller/userController')
const categoryController=require('../controller/categoryController')
const subcategoryController=require('../controller/subcategoryController')
const prodController=require('../controller/prodController')
const cartController=require('../controller/cartController')
const wishController=require('../controller/wishController')
const jwtMiddleware=require('../middleware/jwtMiddleware')
const recentController=require('../controller/recentController')

const router=new express.Router

router.post('/login',usercontroller.login)
router.get('/cat',categoryController.allcat)
router.get('/subcat/:id',subcategoryController.allsubcat)
router.get('/getcprod/:id',prodController.allcprod)
router.get('/getsprod/:id',prodController.allsprod)

//-------view prod-----
 router.get('/viewprod/:id',prodController.viewproduct)
 router.get('/recom',prodController.latestp)


//--------cart---------
router.post('/addcart',jwtMiddleware,cartController.addtoCart)
router.get('/getcart/:id',jwtMiddleware,cartController.getcartlist)
 router.get('/inccart/:id',cartController.incCartQuantity)
 router.get('/deccart/:id',cartController.decQuantity)

//---------wish----------
router.post('/addwish',jwtMiddleware,wishController.addToWish)
router.get('/getwish/:id',wishController.getwishlist)
 router.delete('/delwish/:id',wishController.deletewish)

//---------recents--------
router.post('/addrecent',recentController.addrecent)
router.get('/getrecent/:id',recentController.getrecents)


module.exports=router
