import {Router} from 'express'
import { auth } from '../../meddilewear/auth.js';
 import  * as commentController from './comment.controller/comment.controller.js' 
const router = Router();

router.post('/:id/addcomment' ,auth() , commentController.createcomment )
router.get('/:id/getcomments' ,auth() , commentController.getAllcommentss )
  
 
 
export default router
