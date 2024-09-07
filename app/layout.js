import { Inter } from "next/font/google";
import "./globals.css";
import React, { Suspense } from 'react';
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kerdos",
  description: "It means Gain or Profit in Greek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/kerdoslogo2.png"/>
      </head>
      <body>
    <div>
      <Suspense fallback={<Loading />}>
        <main>{children}</main>
      </Suspense>
    </div>
    </body>
    </html>
  );
}
