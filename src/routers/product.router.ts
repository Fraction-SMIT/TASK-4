import express from "express";
import productsController from "../controllers/products.controller";

const ProductRouter = express.Router();

// AngularRouter.use((request, response, next) => {
//     next();
// });

ProductRouter.get('/getMensWatchesList', productsController.getMensWatchesList);



export default ProductRouter;