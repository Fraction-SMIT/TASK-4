import express, { NextFunction, Request, Response } from "express";
import AngularRouter from "./routers/user.router";
import productRouter from "./routers/product.router";
const app = express();
const port = 3000;
const router = express.Router();



app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

app.use('/api/user', AngularRouter);

app.use('/api/products', productRouter )

app.listen(port);







