"use client"


import type { Metadata } from "next";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import "./globals.css";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import "@/css/navbar.css"
import "@/css/homePage.css"
import "@/css/homeLocation.css"



const metadata: Metadata = {
  title: "TravelJoy",
  description: "Travel site that inspired by voyalux.az",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);






  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          {children}
        </body>
      </Provider>
    </html>
  );
}
