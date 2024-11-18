import type { Metadata } from "next";
import "./globals.css";
import { googleSans } from "./fonts";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Test Task",
  description: "Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${googleSans.variable} antialiased flex flex-col min-h-dvh`}
      >
        <Header />
        <div className="px-6 sm:px-12 md:px-20 py-6 md:py-10">
          <div className="max-w-[1280px]  w-full mx-auto h-full flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
