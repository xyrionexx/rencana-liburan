"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/component/navbar/navbar";
import Footer from "@/components/component/footer/footer";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const path = pathname.replace("/", "");
  const isNotFoundPage = pathname === "/404" || pathname === "/not-found";

  return (
    <>
      {path !== "login" && !isNotFoundPage ? (
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
