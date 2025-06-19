import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "STRATEGY",
    iconUrl:
      "https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20fa66d47f859adbb70_be6541a0545698a1b015d67bfc0cc149_icon-strategy.svg",
    bgColor: "bg-[#E5DAF6]",
    bottomLabel: "DETAILS",
    leftIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="1.5" />
      </svg>
    ),
    rightIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    ),
    back: {
      bg: "bg-[#E5DAF6]",
      label: "STRATEGY",
      items: ["Analyse", "Planung", "Umsetzung"],
      bottomLabel: "DETAILS",
      arrow: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2" />
        </svg>
      ),
    },
  },
  {
    title: "DESIGN",
    iconUrl:
      "https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20f7daa2d8b2d055b0a_7600e889a3af59f71db716a7c1ded5bc_icon-design.svg",
    bgColor: "bg-[#FFD2F3]",
    bottomLabel: "PROZESS",
    leftIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="black" strokeWidth="1.5" />
      </svg>
    ),
    rightIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    ),
    back: {
      bg: "bg-[#FFD2F3]",
      label: "DESIGN",
      items: ["Research", "Wireframing", "Prototyping"],
      bottomLabel: "PROZESS",
      arrow: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2" />
        </svg>
      ),
    },
  },
  {
    title: "BUILD",
    iconUrl:
      "https://cdn.prod.website-files.com/64591e5db836f60c02bb97e9/6797a20e6c45c550e3c0ff77_cc81fab4339bbc8ebbe9cc70ef28c84e_icon-build.svg",
    bgColor: "bg-[#FCDCA6]",
    bottomLabel: "STEPS",
    leftIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          stroke="black"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
    rightIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="black"
          strokeWidth="1.5"
        />
      </svg>
    ),
    back: {
      bg: "bg-[#FCDCA6]",
      label: "BUILD",
      items: ["Development", "Testing", "Deployment"],
      bottomLabel: "STEPS",
      arrow: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#000" strokeWidth="2" />
        </svg>
      ),
    },
  },
];

function useScrollFlip(ref, sectionRef) {
  const [rotation, setRotation] = useState(0);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!ref.current || !sectionRef.current) return;
      const rect = ref.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // Card center relative to viewport
      const cardCenter = rect.top + rect.height / 2;
      const flipStart = windowHeight / 2;
      const flipEnd = rect.height / 2;

      let progress = 0;
      if (cardCenter <= flipStart && cardCenter >= flipEnd) {
        progress = (flipStart - cardCenter) / (flipStart - flipEnd);
      } else if (cardCenter < flipEnd) {
        progress = 1;
      }
      progress = Math.max(0, Math.min(1, progress));
      setRotation(progress * 180);

      // Pin section if flipping is not done and section is in viewport
      if (progress < 1 && sectionRect.top < 0 && sectionRect.bottom > windowHeight) {
        setIsPinned(true);
        document.body.style.overflow = "hidden";
        sectionRef.current.style.position = "fixed";
        sectionRef.current.style.top = "0";
        sectionRef.current.style.left = "0";
        sectionRef.current.style.width = "100vw";
        sectionRef.current.style.zIndex = "40";
      } else {
        setIsPinned(false);
        document.body.style.overflow = "";
        sectionRef.current.style.position = "";
        sectionRef.current.style.top = "";
        sectionRef.current.style.left = "";
        sectionRef.current.style.width = "";
        sectionRef.current.style.zIndex = "";
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "";
      if (sectionRef.current) {
        sectionRef.current.style.position = "";
        sectionRef.current.style.top = "";
        sectionRef.current.style.left = "";
        sectionRef.current.style.width = "";
        sectionRef.current.style.zIndex = "";
      }
    };
  }, [ref, sectionRef]);

  return rotation;
}

function ServiceCard({
  title,
  iconUrl,
  bgColor,
  bottomLabel,
  leftIcon,
  rightIcon,
  back,
  sectionRef,
}) {
  const cardRef = useRef(null);
  const rotation = useScrollFlip(cardRef, sectionRef);

  // Calculate scale: 1 at 0deg, 1.08 at 90deg, 1 at 180deg (peak at halfway flip)
  const scale =
    1 +
    0.08 *
      Math.sin((Math.min(rotation, 180) / 180) * Math.PI);

  // Card-specific icons for the back side (top right and bottom left)
  const backIcons = {
    STRATEGY: {
      top: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="4" height="4" fill="#000" />
          <rect x="12" y="2" width="4" height="4" fill="#000" />
          <rect x="2" y="12" width="4" height="4" fill="#000" />
          <rect x="12" y="12" width="4" height="4" fill="#000" />
        </svg>
      ),
      bottom: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ transform: "rotate(180deg)" }}>
          <rect x="2" y="2" width="4" height="4" fill="#000" />
          <rect x="12" y="2" width="4" height="4" fill="#000" />
          <rect x="2" y="12" width="4" height="4" fill="#000" />
          <rect x="12" y="12" width="4" height="4" fill="#000" />
        </svg>
      ),
    },
    DESIGN: {
      top: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <polygon points="9,2 16,16 2,16" fill="#000" />
        </svg>
      ),
      bottom: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ transform: "rotate(180deg)" }}>
          <polygon points="9,2 16,16 2,16" fill="#000" />
        </svg>
      ),
    },
    BUILD: {
      top: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" stroke="#000" strokeWidth="2" />
        </svg>
      ),
      bottom: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ transform: "rotate(180deg)" }}>
          <rect x="2" y="2" width="14" height="14" stroke="#000" strokeWidth="2" />
        </svg>
      ),
    },
  };

  // Card-specific lists for the back side
  const backLists = {
    STRATEGY: [
      "Visual Research",
      "Mitbewerber Analyse",
      "Wireframes",
      "Content Mapping",
      "User Flow",
      "Konzepte",
    ],
    DESIGN: [
      "Unternehmenswebsites",
      "Marketing Websites",
      "Design System",
      "Animation",
      "Design Support",
      "Barrierefreies Design",
    ],
    BUILD: [
      "Webflow Entwicklung",
      "Web Animation",
      "Webflow CMS",
      "Barrierefreie Entwicklung",
      "Technisches SEO",
      "Frontend Support",
    ],
  };

  return (
    <div
      ref={cardRef}
      className="relative perspective-[1200px] min-w-[300px] max-w-md w-[300px] h-[420px] mx-4 my-10"
      style={{ overflow: "visible" }}
    >
      <div
        className="transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `scale(${scale}) rotateY(${rotation}deg)`,
        }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 rounded-2xl p-10 flex flex-col justify-between ${bgColor} backface-hidden`}
          style={{ backfaceVisibility: "hidden", zIndex: 2, width: "100%", height: "100%", overflow: "hidden" }}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-black font-bold text-xs tracking-wide">
              {title}
            </h3>
            <div className="w-5 h-5">{rightIcon}</div>
          </div>
          <div className="flex justify-center items-center my-2">
            <img
              src={iconUrl}
              alt={title}
              className="w-14 h-14"
              draggable="false"
            />
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="w-4 h-4">{leftIcon}</div>
            <span className="text-black text-xs font-medium">
              {bottomLabel}
            </span>
            <div className="w-4 h-4">{rightIcon}</div>
          </div>
        </div>
        {/* Back Side */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-md p-10 flex flex-col justify-between backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            zIndex: 1,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Top row: title and icon */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#444] font-bold text-xs tracking-wide truncate">{title}</span>
            <span>{backIcons[title]?.top}</span>
          </div>
          {/* List */}
          <ul className="flex flex-col gap-1 mb-2 flex-1 justify-center overflow-y-auto">
            {backLists[title].map((item) => (
              <li
                key={item}
                className="bg-[#F4F1EA] text-black text-[13px] font-semibold rounded-md py-1 px-2 text-center truncate"
                style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
              >
                {item}
              </li>
            ))}
          </ul>
          {/* Bottom row: icon and rotated label */}
          <div className="flex justify-between items-end mt-auto">
            <span>{backIcons[title]?.bottom}</span>
            <span className="text-xs font-mono text-[#444] font-bold transform rotate-180 tracking-widest truncate">
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FLipCard() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[#faf6ef] py-12 px-2">
      <div className="px-5 mx-auto">
        {/* Section Heading and Quote */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-full flex flex-row justify-between items-center mb-6">
            <span className="text-xl md:text-2xl font-semibold text-black text-left">
              Service
            </span>
            <span className="text-lg md:text-xl font-medium text-black text-center flex-1">
              Wenn alles gleich ist, ist es die größte Chance, anders zu sein.
            </span>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center py-8">
          {cards.map((card) => (
            <ServiceCard key={card.title} {...card} sectionRef={sectionRef} />
          ))}
        </div>
      </div>
      <style>{`
        .perspective-[1200px] {
          perspective: 1200px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}

export default FLipCard;
