"use client"

import React, { useEffect } from "react";
import Image from "next/image";

const Schedule = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="container mx-auto lg:px-0 px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 ">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="font-fontOutfit font-semibold lg:text-[26px] text-lg text-textHeading">
              Create Your Schedule
            </h2>
            <p className="font-fontOutfit font-medium text-[#696969] lg:text-lg text-xs">
              Effortlessly plan your work hours with Tapygoo's scheduling
              feature!
            </p>
          </div>
          
          {/* Calendly Widget */}
          
        </div>

        {/* Right Section */}
        <div className="hidden lg:block">
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/apralize/discovery"
            style={{
              minWidth: "320px",
              height: "45rem",
              border: "1px solid #eaeaea"
            }}
          />
         
        </div>
      </div>
    </div>
  );
};

export default Schedule;