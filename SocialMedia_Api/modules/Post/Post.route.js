import {Router} from 'express'
import { auth } from '../../meddilewear/auth.js';
import { validationtype,HME,myMulter } from '../../services/multer.js'; 
import  * as PostController from './Post.controller/Post.controller.js' 
const router = Router();
  
router.post("/addPost" ,auth(),myMulter(validationtype.image).array('file',5),HME,PostController.createpost)
router.get("/getAllPosts" ,auth(),   PostController.getAllPosts)
router.get("/getPost/:id" ,/* auth(), */PostController.getPost)

 
export default router
