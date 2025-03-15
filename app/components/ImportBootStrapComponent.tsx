'use client'
import { useEffect, useState } from "react";

export default function ImportBootStrap({ children, }: { children: React.ReactNode }) {

  const [bootstrap, setBootstrap] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    setBootstrap(true);
  }, []);
  return (
    <>
      {bootstrap && children}
    </>
  );
}