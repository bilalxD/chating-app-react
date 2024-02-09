import express from "express";

const router = express.Router();

router.get("/login", (req,res)=>{
    res.send("this is our login api")
})

export default router