import React from "react";

function HeroCard({ bgColor, title, iconUrl, bottomLabel, leftIcon, rightIcon }) {
  return (
    <div
      className={`rounded-2xl p-5 max-w-xs w-[160px] h-[250px] flex flex-col justify-between my-10 mx-4 ${bgColor}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-black font-bold text-xs tracking-wide">{title}</h3>
        <div className="w-5 h-5">{rightIcon}</div>
      </div>
      <div className="flex justify-center items-center my-2">
        <img src={iconUrl} alt={title} className="w-14 h-14" draggable="false" />
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="w-4 h-4">{leftIcon}</div>
        <span className="text-black text-xs font-medium">{bottomLabel}</span>
        <div className="w-4 h-4">{rightIcon}</div>
      </div>
    </div>
  );
}

export default HeroCard;  