
import express from "express";
import fileRoutes from "./routes/fileRoutes.js"

const app = express();

app.use("/file",fileRoutes)

app.use(express.json());

app.use("/",(req,res)=>{

    res.status(200).json("hello from server");
})

const port = 5000;

app.listen(port,()=>{
    console.log("server running port on",port);
})