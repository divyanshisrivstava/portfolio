import { useState } from "react";

interface WorkPlayToggleProps {
  activeTab: "work" | "play";
  onTabChange: (tab: "work" | "play") => void;
}

const WorkPlayToggle = ({ activeTab, onTabChange }: WorkPlayToggleProps) => {
  return (
    <div className="relative flex gap-2">
      <div
        className="absolute h-7 rounded-full bg-neutral-100 transition-all duration-200"
        style={{
          width: activeTab === "work" ? "66px" : "56px",
          transform: activeTab === "play" ? "translateX(74px)" : "translateX(0px)",
        }}
      />
      <button
        className="relative px-4 py-1.5 rounded-full text-sm bg-transparent z-10 flex items-center justify-center leading-none"
        onClick={() => onTabChange("work")}
      >
        Work
      </button>
      <button
        className="relative px-4 py-1.5 rounded-full text-sm bg-transparent z-10 flex items-center justify-center leading-none"
        onClick={() => onTabChange("play")}
      >
        Play
      </button>
    </div>
  );
};

export default WorkPlayToggle;
