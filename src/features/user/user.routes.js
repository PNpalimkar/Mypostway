//user route handlers that maps http requests to controller methods.specifies the endpoints client can access and related controller methods to handle each request

import { upload } from '../../middleware/fileupload.middleware.js';
import express from "express";
import UserController from "./user.controller.js";

const userController = new UserController();

const router = express.Router();



router.post('/signup', (req, res)=>{ 
    userController.signUp(req, res)
});
router.post('/signin', (req, res)=>{ 
    userController.signIn(req, res)
});
// router.post('/reset-password', (req, res)=>{ 
//     userController.resetPassword(req, res)
// });
router.get('/logout', (req, res)=>{ 
    userController.logout(req, res)
});

router.get('/get-details/:userId', (req, res)=>{ 
    userController.getUser(req, res)
});

router.get('/get-all-details/', (req, res)=>{ 
    userController.getAll(req, res)
});

router.put('/update-details/:userId',upload.single('imageUrl'), (req, res)=>{ 
    userController.update(req, res)
});

export default router;