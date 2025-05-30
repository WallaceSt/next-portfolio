'use client';

import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type BodySectionProps = {
  children: React.ReactNode;
}

const BodySection : React.FC<BodySectionProps> = ({children}) => {
  return (
    <section className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}>
      {children}
    </section>
  )
}

export default BodySection