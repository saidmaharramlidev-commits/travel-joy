"use client"


import type { Metadata } from "next";
import "./globals.css";
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import "@/css/navbar.css"



const metadata: Metadata = {
  title: "TravelJoy",
  description: "Travel site that inspired by voyalux.az",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
