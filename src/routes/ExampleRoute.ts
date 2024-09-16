import { Router,Request,Response } from "express";
export const ExampleRoute = Router();
ExampleRoute.get('/',(req:Request,res:Response)=>{
    return res.status(200).json("example route");
});
