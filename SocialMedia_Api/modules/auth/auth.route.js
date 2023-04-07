import {Router} from 'express'
import * as authController from './auth.controller/auth.controller.js' ;

const router = Router();
 
router.post("/signup" , authController.signup)
router.post("/signin" , authController.signin)
router.get("/confirmEmail/:token" , authController.cofirmEmail)
export default router
