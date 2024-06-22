import HeroSection from "@/app/home/sections/Hero";
import FacebookApiIntegration from "@/components/Facebook-Api-Integration/Facebook-Api-Integration";
import GoogleTag from "@/components/Google-Tag/google-tag";
import KlaviyoTracking from "@/components/Klaviyo-Tracking/Klaviyo-Tracking";
import Navbar from "@/components/navigation/Navbar";
import TopNav from "@/components/navigation/TopNav";
import "@/styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
 <link rel="icon" href="/ICO/Astric.ico" />
    <html lang="en">
    <head>
          <KlaviyoTracking />
        </head>
      <body>
        <div>
          <TopNav />
          <Navbar />
          <main className="bg-white">{children}</main>
        </div>
        <FacebookApiIntegration />
        <GoogleTag/>
      </body>
    </html>

    </>
  );
}
