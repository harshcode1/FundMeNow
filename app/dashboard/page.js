"use client"

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const dashboard = () => {
  const { data: session } = useSession();
    const router = useRouter();
  
    if (!session) {
      router.push('/login');
      return null; // Optionally, you can return null or a loading spinner here
    }
  return (
    <h1>Hello enter to your Dashboard</h1>
  )
}

export default dashboard
