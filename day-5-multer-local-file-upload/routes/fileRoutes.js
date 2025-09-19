import express from "express";
import uploads from "../middleware/FileUpload.js";

const router = express.Router();

router.post("/add",uploads.single("file"),(req,res)=>{
    try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file, 
    });
  } catch (error) {
    res.status(500).json({ message: "File upload failed", error: error.message });
  }
});
export default router;