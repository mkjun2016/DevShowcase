import { useEffect, useState } from "react";
import { isMobile } from "@/lib/utils";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Don't show custom cursor on mobile devices
    if (isMobile()) return;

    setHidden(false);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Handle link hover state
    const addLinkHoverEvents = () => {
      const allLinks = document.querySelectorAll("a, button");
      allLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => setLinkHovered(true));
        link.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add link events after DOM is fully loaded
    if (document.readyState === "complete") {
      addLinkHoverEvents();
    } else {
      window.addEventListener("load", addLinkHoverEvents);
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("load", addLinkHoverEvents);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${clicked ? 0.8 : 1})`,
        }}
      />
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${
            clicked ? 0.8 : linkHovered ? 1.5 : 1
          })`,
        }}
      />
    </>
  );
}
