"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/lib/navbar";
import Footer from "@/app/lib/footer";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const path = pathname.replace("/", "");

  return (
    <>
      {path !== "login" ? (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
