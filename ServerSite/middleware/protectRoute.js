import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoute = async (req, res, next) =>{
    try {
        const token = req.cookie.jwt;
        if(!token){
            res.status(401).json({Error: "Token Not Found"})
        }
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET);

        if (!verifyToken) {
            res.status(401).json({error: "Unauthorize - Invalid Token"})
        }
        const user = await User.findById(verifyToken.userId).select("-password");
        if (!user) {
            res.status(401).json({error: "User Not Found"})
        }
        req.user = user;

        next();
        
    } catch (error) {
        console.log("Error In Protected Route: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default protectRoute;