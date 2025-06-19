import React, { useRef, useEffect, useState } from "react";

function DottedLine({ className }) {
  // Dynamically render as many "|" as fit in the parent width, always using the parent node's width
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    function updateCount() {
      if (ref.current && ref.current.parentNode) {
        // Use parentNode's width to ensure full width
        const width = ref.current.parentNode.getBoundingClientRect().width;
        console.log("Parent width:", width);
        setCount(Math.max(1, Math.floor(width / 7)));
      }
    }
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <div ref={ref} className={`w-full flex items-center flex-grow ${className || ""}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="text-white opacity-70 text-xs select-none flex-shrink-0"
          style={{ marginRight: i !== count - 1 ? 4 : 0 }}
        >
          |
        </span>
      ))}
    </div>
  );
}

function Dot() {
  return (
    <section className="w-full min-h-[1000px] bg-black flex flex-col md:flex-row relative overflow-hidden px-0 py-0">
      {/* Left column */}
      <div className="relative flex flex-col justify-between md:w-1/2 w-full px-8 py-35 ">
        <div>
          <span className="text-xs font-mono text-white tracking-widest font-bold mb-6 block">
            EIN KLICK MIT WIRKUNG
          </span>
        </div>
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight max-w-lg">
            Gute Websites sehen nicht nur gut aus – sie fühlen sich auch gut an.
            Kleine Bewegungen, durchdachte Übergänge, subtile Reaktionen:
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-semibold">
            Das macht aus einem Klick ein gutes Gefühl.
          </p>
        </div>
      </div>

      {/* Right column */}
      <div className="relative flex flex-col justify-between md:w-1/2 w-full pr-8  py-35">
        {/* Top labels and dotted line */}
        <div className="w-full mb-12">
          <div className="flex flex-row justify-between items-center w-full mb-2">
            <span className="text-xs font-bold text-white mr-2">STANDARD</span>
            <span className="text-xs font-bold text-white ml-2">GEFÜHL</span>
          </div>
          <DottedLine />
        </div>
        {/* Dots */}
        <div className="flex justify-center items-center flex-1">
          <div className="flex gap-16">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="w-20 h-20 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, #ffe066 70%, #ffb6d1 100%)",
                  boxShadow: "0 0 32px 0 #ffe06655",
                  display: "inline-block",
                }}
              />
            ))}
          </div>
        </div>
        {/* Bottom dotted line */}
        <div className="flex justify-end w-full mt-8">
          <DottedLine />
        </div>
      </div>
    </section>
  );
}

export default Dot;

