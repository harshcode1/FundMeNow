"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [showDropdown, setshowDropdown] = useState(true);
  const { data: session } = useSession();
  // if(session) {
  //     return <>
  //       Signed in as {session.user.email} <br/>
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   }

  return (
    <nav className="bg-blue-950 text-white flex justify-between items-center px-4 h-16">
      <div className="logo font-bold flex justify-center items-center">
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
        {session && (
          <>
            {" "}
            <button
            onClick={()=>{setshowDropdown(!showDropdown)}}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Welcome {session.user.name}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 ${
                showDropdown ? "" : "hidden"
              } bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
        {session && (
          <Link href={"/dashboard"}>
            <button
              type="button"
              className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        "
            >
              Dashboard
            </button>
          </Link>
        )}
        {session && (
          <button
            type="button"
            className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        "
          >
            LogOut
          </button>
        )}

        {!session && (
          <Link href={"/login"}>
            <button
              type="button"
              className="
          text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
          focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
          font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
        "
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
