import User from "../models/user.model.js"

export const login = (req, res) =>{
    res.send("This is our login api.")
}

export const logout = (req, res) =>{
    res.send("This is our logout api.")
}

export const signup = async (req, res) =>{
    try{
        const {fullName, userName,password,confirmPassword,gender,profilepic} = req.body
        if(password !== confirmPassword){
            return res.status(400).json("Password Don't Match");
        }
        const user = await User.findOne(userName)
        if(user){
            return res.status(400).json("This Username Is Already Exist Please Try Another");
        }
        const newUser = new user({
            fullName,
            userName,
            password,
            gender,
            profilepic,
        })
        await newUser.save()
        res.status(201).json({
            _id:newUser._id,
            userName:newUser.userName,
            gender:newUser.gender,
            profilepic:newUser.profilepic,
        })
    }catch(err){
           console.log("Error in signup controller: ",err);
           res.status(500).json({Error:"Signup nahi ho sakhta yeh masla agaya hai koi"}) 
    }
}