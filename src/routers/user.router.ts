import express from "express";
import UserController from "../controllers/user.controller"

const AngularRouter = express.Router();

// AngularRouter.use((request, response, next) => {
//     next();
// });

AngularRouter.get('/getUserList', UserController.getUserList);
AngularRouter.get('/getUser/:id', UserController.getUser);


export default AngularRouter;