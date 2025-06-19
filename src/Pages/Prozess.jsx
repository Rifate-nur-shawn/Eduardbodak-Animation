import React from "react";

function Prozess() {
  return (
    <div className="min-h-screen bg-[#F9F4EB] relative">
      {/* Decorative Pattern */}
      <div className="w-full py-6 px-8">
        <div className="flex justify-between items-center text-black font-medium font-narrow">
          {/* Left side */}
          <div className="flex items-center gap-8">
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xs font-semibold tracking-wider ml-8">
              HASHICHA
            </span>
          </div>

          {/* Center diamonds */}
          <div className="flex items-center gap-16">
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-8">
            <span className="text-xs font-semibold tracking-wider mr-8">
              LA-H: AA87AL-EUR
            </span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
            <span className="text-xl">✦</span>
          </div>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="px-8 h-screen flex flex-col">
        {" "}
        {/* Hero Section - Restructured Layout */}{" "}
        <div className="mt-12 mb-20">
          {/* Top Title - EINFACHER */}
          <div className="mb-8">
            <h1
              className="font-black text-black leading-[0.85] tracking-tight font-narrow"
              style={{ fontSize: "10vw" }}
            >
              EINFACHER
            </h1>
          </div>
          {/* Bottom Row - Image and ABLAUF */}{" "}
          <div className="flex items-start">
            {/* Left side - Image */}
            <div
              className="bg-blue-200 overflow-hidden relative mr-8"
              style={{
                width: "320px",
                height: "10vw",
                borderRadius: "1rem",
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/67bca3b24a78c617c8145f5e_process-static.webp"
                alt="Mountain landscape"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bg-white rounded-lg flex items-center justify-center"
                style={{
                  top: "1.5rem",
                  left: "1.5rem",
                  width: "2rem",
                  height: "2rem",
                }}
              >
                <div
                  className="bg-orange-400 rounded-full"
                  style={{
                    width: "1rem",
                    height: "1rem",
                  }}
                ></div>
              </div>
            </div>

            {/* Right side - ABLAUF */}
            <div className="flex-1">
              <h2
                className="font-black text-black leading-[0.85] tracking-tight font-narrow"
                style={{ fontSize: "10vw" }}
              >
                ABLAUF
              </h2>
            </div>
          </div>
        </div>
        {/* Process Steps - Top Right */}
        <div className="absolute top-110 right-8">
          <div className="text-right space-y-2">
            <div className="text-sm font-semibold text-black font-narrow">
              01&nbsp;&nbsp;&nbsp;DEFINE
            </div>
            <div className="text-sm font-semibold text-black font-narrow">
              02&nbsp;&nbsp;&nbsp;DESIGN
            </div>
            <div className="text-sm font-semibold text-black font-narrow">
              03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BUILD
            </div>
            <div className="text-sm font-semibold text-black font-narrow">
              04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RUN
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex-1 flex flex-col justify-end mb-20 pb-27 ml-4">
          <div className="flex justify-between items-end">
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Price Badge */}
              <div className="mb-3">
                <span className="bg-black text-white px-4 py-2 text-sm font-semibold font-narrow">
                  PRO MONAT € 3.245,-
                </span>
              </div>

              {/* Description Text */}
              <div>
                <p
                  className="text-4xl font-medium leading-relaxed text-black"
                  style={{
                    fontFamily: "var(--font-family-normal)",
                    lineHeight: "1.3",
                  }}
                >
                  Websites können ganz schön komplex sein - aber der Prozess
                  dahin und die Website selbst sollten es nicht sein.{" "}
                  <span className="text-gray-500">
                    Niemand möchte sich durch endlose Seiten klicken.
                  </span>
                </p>
              </div>
            </div>{" "}
            {/* Bottom Right Label */}
            <div className="text-right mr-7">
              <div className="text-sm font-semibold text-black mb-2 font-narrow">
                WEBDESIGN & WEBFLOW
              </div>
              <div className="w-2 h-2 bg-black rounded-full ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prozess;
