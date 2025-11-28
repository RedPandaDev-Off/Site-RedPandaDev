import { useEffect } from "react";
import gsap from "gsap";

export default function HexBackground() {
  useEffect(() => {
    gsap.to("#hexLogo", {
      scale: 1.12,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <div id="hex-bg">
      <svg id="hexLogo" viewBox="0 0 200 200">
        <polygon
          points="100,20 170,60 170,140 100,180 30,140 30,60"
          stroke="#ff6a00"
          strokeWidth={3}
          fill="none"
        />
        <polygon
          points="100,50 145,75 145,125 100,150 55,125 55,75"
          stroke="#ff6a00"
          strokeWidth={2}
          fill="none"
        />
      </svg>
    </div>
  );
}
