import express from "express";
import uploads from "../middleware/FileUpload";

const router = express.Router();

router.post("/add",uploads.single("file"),(req,res)=>{
    try{

    }catch(error){
        console.log(error);

    }
});
export default router;