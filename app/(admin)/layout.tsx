'use client';

import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode}) {
    const awaitTimeout = (delay: number)  => new Promise(resolve => setTimeout(resolve, delay));

    const alertSession = async () => {
      await awaitTimeout(1000 * 60 * 23);
      alert("Sesión expirada");
      window.location.href = "/login";
    };

    useEffect(() => {
      alertSession();
    }, []);

    return (
      <>
        <main>{children}</main>
      </>
    );
  }