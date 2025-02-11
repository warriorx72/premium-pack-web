'use client';
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button className="btn btn-primary" onClick={() => {alert("Logout")}}>Logout</button>

    </div>
  )
}