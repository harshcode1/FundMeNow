"use client"
import Link from 'next/link';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  // if(session) {
  //     return <>
  //       Signed in as {session.user.email} <br/>
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   }

  return (
    <nav className='bg-blue-950 text-white flex justify-between items-center px-4 h-16'>
      <div className='logo font-bold flex justify-center items-center'>
        <img src="coffee.gif" width={40} alt="" />
        <span>BuyMeACoffee</span>
      </div>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div>
        {session && <Link href={"/dashboard"}>
          <button type="button" className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        ">
            Dashboard
          </button></Link>}
          {session && 
          <button type="button" className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        ">
            Dashboard
          </button>}

        {!session && <Link href={"/login"}>
          <button type="button" className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        ">
            Login
          </button></Link>}
      </div>
    </nav>
  );
}

export default Navbar;
