import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const login = async (req, res) => {
 
  try {
    const {userName , password } = req.body;
    const user = await User.findOne({userName});
    const isPassword = await bcrypt.compare(password, user?.password || "");
    if(!user || !isPassword){
      res.status(400).json("User Not Found or invalid Password");
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      gender: user.gender,
      profilePic: user.profilePic,
    });

  }catch(err){
    console.log("Error in Signin controller: ",err);
    res.status(400).json({ Error: "Signin nahi ho sakhta yeh masla agaya hai koi" });
  }
};

export const logout = (req, res) => {
  try{
    res.cookie("jwt","",{maxAge: 0})
    res.status(200).json("Logged out Successfully ! ")
  }catch (err) {
    console.log("Error in Logout controller: ");
    res.status(500).json({ Error: "Logout nahi ho sakhta yeh masla agaya hai koi" });
  }
};

export const signup = async (req, res) => {
  try {
    const {
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;

    const newprofilePic = profilePic + userName;

    // confirming password
    if (password !== confirmPassword) {
      return res.status(400).json("Password Don't Match");
    }

    // finding existing users
    const user = await User.findOne({ userName });

    if (user) {
      return res
        .status(400)
        .json("This Username Is Already Exist Please Try Another");
    }

    //Hashed Password Here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // sending data to database
    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: newprofilePic,
    });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ Error: " Invalid User Data " });
    }
  } catch (err) {
    console.log("Error in signup controller: ");
    res
      .status(500)
      .json({ Error: "Signup nahi ho sakhta yeh masla agaya hai koi" });
  }
};
