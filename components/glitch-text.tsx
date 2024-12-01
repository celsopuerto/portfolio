import { useState } from "react";

interface GlitchTextProps {
  originalChar: string;
}

const GlitchText = ({ originalChar }: GlitchTextProps) => {
  const [displayedChar, setDisplayedChar] = useState(originalChar);

  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const handleMouseEnter = () => {
    const interval = setInterval(() => {
      setDisplayedChar(getRandomChar());
    }, 50); // Change character every 50ms

    // Stop glitching after 2 seconds and reset to the original character
    setTimeout(() => {
      clearInterval(interval);
      setDisplayedChar(originalChar);
    }, 1000); // 2 seconds glitch duration
  };

  return (
    <span
      className="glitchChar"
      onMouseEnter={handleMouseEnter}
      style={{ display: "inline-block", cursor: "pointer" }}
    >
      {displayedChar}
    </span>
  );
};

export default GlitchText;
