import express from "express";
const router = express();

import {
  getRazorpaykey,
  createOrder,
  payOrder,
} from "../controllers/userPayment.js";

router.get("/get-razorpay-key", getRazorpaykey);
router.post("/create-order", createOrder);
router.post("/pay-order", payOrder);

export default router;
