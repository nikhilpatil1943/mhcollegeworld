import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userList from "../models/userSchema.js";

const userCreate = async (req, res) => {
  try {
    const { name, phone, password, cpassword } = req.body;
    if (!name || !phone || !password || !cpassword) {
      return res
        .status(400)
        .json({ message: "Please fill all the required inputs " });
    }
    if (password!==cpassword){
      return res.status(400).json({message: "Password does not match"})
    }
    const existingUser = await userList.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const isPaid = false;

    const result = await userList.create({
      phone,
      password: hashedPassword,
      name,
      isPaid,
    });

    const token = jwt.sign({ phone: result.phone, id: result._id }, "test", {
      expiresIn: "1h",
    });

    return res.status(201).json({
      result: { name, phone, isPaid },
      token,
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Something went wrong, Please try later" });
  }
};
export default userCreate;
