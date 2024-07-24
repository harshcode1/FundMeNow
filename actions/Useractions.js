"use server"

import connectToDatabase from "@/db";
import Payment from "@/models/Payment";
import User from "@/models/User";
import RazorPay from "razorpay";

export const initiate = async (amount, to_username, paymentform) => {
    try {
        if (!amount || !to_username || !paymentform) {
            throw new Error("Missing required parameters");
        }

        await connectToDatabase();

        const instance = new RazorPay({
            key_id: process.env.NEXT_PUBLIC_KEY_ID,
            key_secret: process.env.KEY_SECRET
        });

        if (!instance) {
            throw new Error("Failed to create RazorPay instance");
        }

        const options = {
            amount: Number(amount) * 100, // RazorPay expects amount in paise
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        if (!order) {
            throw new Error("Failed to create RazorPay order");
        }

        const payment = await Payment.create({
            oid: order.id,
            amount: amount,
            to_user: to_username,
            name: paymentform.name,
            message: paymentform.message
        });

        if (!payment) {
            throw new Error("Failed to create payment record");
        }

        console.log("Payment initiated successfully:", order);
        return order;
    } catch (error) {
        console.error("Error initiating payment:", error);
        throw error;
    }
}

export const fetchUser = async (username) => {
    try {
        await connectToDatabase();
        const userDoc = await User.findOne({ username }).exec();
        if (!userDoc) {
            throw new Error("User not found");
        }
        const user = userDoc.toObject({ flattenObjectIds: true });
        return user;
    } catch (error) {
        console.error("Error fetching user by username:", error);
        throw error;
    }
}

export const fetchPayments = async (username) => {
    try {
        await connectToDatabase();
        const payments = await Payment.find({ to_user: username }).sort({ amount: -1 }).lean();
        return payments;
    } catch (error) {
        console.error("Error fetching payments:", error);
        throw error;
    }
}

export const updateProfile = async (data, oldusername) => {
    await connectToDatabase()
    let ndata = Object.fromEntries(data)

    // if username is bring updated then check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if(u) {
            return {error : "Username ulready Exists"}
        }

    }
    await User.updateOne({email : ndata.email} , ndata);
}

