import { NextResponse } from "next/server";
import connectToDatabase from "@/db";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
const { validatePaymentVerification } = require("razorpay/dist/utils/razorpay-utils");

export async function POST(req) {
    await connectToDatabase();

    let body = await req.formData();
    body = Object.fromEntries(body);

    const payment = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!payment) {
        return NextResponse.json({ error: "Order ID not found" }, { status: 404 });
    }

    const isValid = validatePaymentVerification(
        { "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id },
        body.razorpay_signature,
        process.env.KEY_SECRET
    );

    if (isValid) {
        const updatedPayment = await Payment.findOneAndUpdate(
            { oid: body.razorpay_order_id },
            { "done": true },
            { "new": true }
        );

        // Redirect URL with success parameter
        const redirectUrl = `${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentStatus=success`;
        return NextResponse.redirect(redirectUrl);
    } else {
        // Redirect URL with failure parameter
        const redirectUrl = `${process.env.NEXT_PUBLIC_URL}/${payment.to_user}?paymentStatus=failure`;
        return NextResponse.redirect(redirectUrl);
    }
}