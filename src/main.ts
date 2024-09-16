import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ExampleRoute } from "./routes/ExampleRoute";
const exampleServer = express();

exampleServer.use(bodyParser.json());
exampleServer.use(cors());
exampleServer.use(ExampleRoute);
exampleServer.listen(80,()=>{
    console.log("example server started")
})
