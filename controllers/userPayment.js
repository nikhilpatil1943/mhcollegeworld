import Razorpay from "razorpay";
import jwt from "jsonwebtoken";

import userList from "../models/userSchema.js";

export const getRazorpaykey = (req, res) => {
  res.send({ key: process.env.RazorpayKeyId });
};

export const createOrder = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RazorpayKeyId,
      key_secret: process.env.RazorpaySecretKey,
    });
    const options = {
      amount: "249",
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log("order created");
    if (!order) return res.status(500).send({ message: "some error occured" });
    res.send(order);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "something went wrong" });
  }
};

export const payOrder = async (req, res) => {
  try {
    const { razorpayPaymentId, razorpayOrderId, razorpaySignature, token } =
      req.body;
    const decodedData = jwt.verify(token, process.env.JKEY);
    // console.log(decodedData)
    const existinguser = await userList.findOneAndUpdate({_id :decodedData.id}, {
      isPaid: true,
      amount: "24900",
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    })
    // console.log(existinguser);
    const { name, phone, isPaid } = existinguser;
    res.status(200).send({
      result: { name, phone, isPaid },
      token,
      msg: "Payment was Successfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
