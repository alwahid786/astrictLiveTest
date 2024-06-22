"use client";
import React, { useEffect } from 'react';

const KlaviyoTracking = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=RcNLBS';
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default KlaviyoTracking;
