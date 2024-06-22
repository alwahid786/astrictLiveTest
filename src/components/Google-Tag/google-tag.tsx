import React from "react";
import Script from "next/script";

function GoogleTag() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-WNHMFRVM`}
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-WNHMFRVM');
        `}
      </Script>
    </>
  );
}

export default GoogleTag;
