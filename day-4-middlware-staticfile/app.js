import express from "express"

import path from "path"
import { fileURLToPath } from "url";
import httpError from "./middleware/errorHandler.js";
import cors from "cors"

const app = express();


//current  file
const __filename = fileURLToPath(import.meta.url)


//current folder
const __dirname =   path.dirname(__filename)

console.log("file", __filename);

console.log("folder", __dirname);


//in build middleware   
app.use(express.static(path.join(__dirname,"/public")))

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

//local middleware
//undefine routes handler using middleware

app.use((req,res,next)=>{

    const error = new httpError("requested rount not found",500)
    next(error);

})

//handling centralize error

app.use((error,req,res,next)=>{

    //external middleware

    app.use(cors());


    if(res.headerSent){
        next(error);
    }

    res
        .status(error.statusCode || 500)
        .json({message:error.message || "something went wrong try again later"})

    
})

const port = 5000

app.listen(port,()=>{
   console.log("server run port",port)
})