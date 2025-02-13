'use client';

import { redirect } from "next/navigation";

export default function Dashboard() {

  const removeCookie = async () => {
    await fetch(`/api/auth/logout`, {
      method: "POST"
    });
    redirect('/login')
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button className="btn btn-primary" onClick={() => removeCookie()}>Logout</button>

    </div>
  )
} 