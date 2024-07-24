"use client";

import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { initiate, fetchPayments, fetchUser, updateProfile } from '@/actions/Useractions';
import { useSession } from 'next-auth/react';

const PaymentPage = ({ username }) => {
    const { data: session, status } = useSession();
    const [currentUser, setCurrentUser] = useState({});
    const [payments, setPayments] = useState([]);
    const [paymentForm, setPaymentForm] = useState({
        name: '',
        message: '',
        value: ''
    });

    useEffect(() => {
        getData();
        if(!session) {
            Router.push("/login");
        }
    }, [router , session]);

    const getData = async () => {
        try {
            let user = await fetchUser(username);
            setCurrentUser(user);
            let dbPayments = await fetchPayments(username);
            setPayments(dbPayments);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleChange = (e) => {
        setPaymentForm({ ...paymentForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        update()
        let a = await updateProfile(e , session.user.name)
        alert("Profile Updated")
    }

    const pay = async (amount) => {
        if (!paymentForm.name) {
            alert("Name is required.");
            return;
        }
        try {
            let order = await initiate(amount, username, paymentForm);
            var options = {
                "key": process.env.NEXT_PUBLIC_KEY_ID,
                "amount": amount * 100,
                "currency": "INR",
                "name": "GetMeACoffee",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": order.id,
                "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
                "prefill": {
                    "name": paymentForm.name,
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Error initiating payment:", error);
            alert("Failed to initiate payment. Please try again.");
        }
    };

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="cover w-full bg-red-50 relative">
                <Image
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1722729600&token-hash=HVKoue-XHYonEojOK1U6zV4DehD9QHYef7vSZTsQ3sI%3D"
                    alt=""
                    width={1920}
                    height={350}
                />
                <div className="absolute -bottom-12 right-[46%] border-white border-2 rounded-full">
                    <Image
                        width={100}
                        className="rounded-full"
                        height={100}
                        src="https://t3.ftcdn.net/jpg/05/55/79/96/360_F_555799679_wN07UXTYUdeBPJeb5quYBAloxJ9Wafdn.jpg"
                        alt=""
                        style={{ width: "auto", height: "auto" }}
                    />
                </div>
            </div>
            <div className="info flex justify-center items-center my-12 flex-col gap-1">
                <div className='font-bold text-lg'>{username}</div>
                <div className='text-slate-400'>Adding Some Value</div>
                <div className='text-slate-400'>
                    {payments.length} Supporters . {currentUser.views || 0} Views . {currentUser.impressions || 0} Impressions
                </div>
                <div className="payment mt-11 gap-3 flex w-[80%]">
                    <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-10">
                        <h2 className='text-2xl font-bold my-5 text-center'>Supporters</h2>
                        <ul className='my-5 text-lg'>
                            {payments.map((payment, index) => (
                                <li key={index} className='my-4 flex gap-2 items-center'>
                                    <Image width={33} height={33} src="/admin.png" alt="" />
                                    <span>{payment.name} donated <span className="font-bold">₹{payment.amount}</span>
                                        {payment.message && <span> with a message "{payment.message}"</span>}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10'>
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex gap-2 flex-col'>
                            <input onChange={handleChange} type='text' name="name" value={paymentForm.name} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} type='text' name="message" value={paymentForm.message} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} type='text' name="value" value={paymentForm.value} className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button type='button' onClick={() => pay(paymentForm.value)} className='text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Pay</button>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(10)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(20)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(30)}>Pay ₹30</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentPage;