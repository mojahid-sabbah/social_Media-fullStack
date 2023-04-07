import {Router} from 'express'
 import  * as UserController from'./user.controller/User.controller.js'
 import {auth}  from '../../meddilewear/auth.js'
 const router = Router();
router.get("/getallusers" ,auth(),UserController.getAllUsers)
router.get("/stats" ,auth(),UserController.stats)
router.get("/info" ,auth(),UserController.userInfo)
router.get("/deleteusers/:id" ,auth(),UserController.deleteuser)
   
export default router
