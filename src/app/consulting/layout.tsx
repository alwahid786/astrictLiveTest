import React from 'react';
import '@/styles/global.css';
import TopNav from '@/components/navigation/TopNav';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/footer';
import KlaviyoTracking from '@/components/Klaviyo-Tracking/Klaviyo-Tracking';
import FacebookApiIntegration from '@/components/Facebook-Api-Integration/Facebook-Api-Integration';
import GoogleTag from '@/components/Google-Tag/google-tag';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="icon" href="/ICO/Astric.ico" />
      <html lang="en">
        <head>
          <title>Consulting</title>
          <KlaviyoTracking />
        </head>
        <body>
          <div>
            <TopNav />
            <Navbar />
            <main className="bg-white">{children}</main>
            <Footer />
          </div>
          <FacebookApiIntegration />
          <GoogleTag />
        </body>
      </html>
    </>
  );
}
