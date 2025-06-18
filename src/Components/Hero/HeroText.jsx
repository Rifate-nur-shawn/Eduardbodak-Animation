import React from "react";

function HeroText() {
  return (
    <div className="py-12 px-8">
      <div className="ml-2 mx-auto">
        {/* Price badge */}
        <div className="mb-8">
          <span className="bg-black text-white px-4 py-2 text-sm font-semibold">
            PRO MONAT € 3.245,-
          </span>
        </div>

        {/* Description */}
        <div className="flex justify-between items-end gap-12">
          <div className="max-w-4xl">
            <p className="text-3xl md:text-4xl font-medium leading-relaxed text-black">
              Als Webdesigner helfe ich designorientierten Unternehmen, alle
              ihre Wünsche wahr werden zu lassen.{" "}
              <span className="text-gray-500">
                Solange es etwas mit einer tollen Website zu tun hat.
              </span>
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="text-right">
              <div className="text-sm font-semibold text-black mb-2">
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

export default HeroText;
