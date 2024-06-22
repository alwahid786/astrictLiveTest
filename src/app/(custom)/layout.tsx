import FacebookApiIntegration from "@/components/Facebook-Api-Integration/Facebook-Api-Integration";
import GoogleTag from "@/components/Google-Tag/google-tag";
import KlaviyoTracking from "@/components/Klaviyo-Tracking/Klaviyo-Tracking";
import "@/styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
 <link rel="icon" href="/ICO/Astric.ico" />
      <html lang="en">
      <head>
          <title>In-Construction</title>
          <KlaviyoTracking />
        </head> 
        <body>    
          {children}
          <GoogleTag />
          <FacebookApiIntegration />
        </body>
      </html>
    </>
  );
}
