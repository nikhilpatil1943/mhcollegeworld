import jwt from "jsonwebtoken";
import userList from "../models/userSchema.js";

const auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    const decodedData = jwt.verify(token, process.env.JSONTOKEN);
    if (token) {
      req.userId = decodedData?.id;
    }
    const existingUser = await userList.findOne({ _id: decodedData?.id });
    const isPaid = existingUser.isPaid;
    if (!isPaid) {
      res.status(400).send({ message: "this Page is only for Paid users" });
    }
    next();
  } catch (error) {
    res.status(401).send("unauthorized");
    console.log(error);
  }
};

export default auth;
