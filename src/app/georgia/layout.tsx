import React from 'react';
import Footer from '@/components/footer/footer';
import Navbar from '@/components/navigation/Navbar';
import TopNav from '@/components/navigation/TopNav';
import '@/styles/global.css';
import KlaviyoTracking from '@/components/Klaviyo-Tracking/Klaviyo-Tracking';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="icon" href="/ICO/Astric.ico" />
      <html lang="en">
        <head>
          <title>Georgia</title>
          <KlaviyoTracking />
        </head>
        <body className="no-scrollbar">
          <div>
            <TopNav />
            <Navbar />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </>
  );
}
