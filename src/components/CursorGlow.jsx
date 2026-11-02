import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Lightweight custom cursor:
 * - Inner dot follows the pointer directly.
 * - Outer ring follows with spring physics.
 * - The ring expands when hovering an interactive element.
 */
export default function CursorGlow() {
  const cursor = useRef(null);
  const ring = useRef(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringXValue = useMotionValue(-15);
  const ringYValue = useMotionValue(-15);
  const ringX = useSpring(ringXValue, { stiffness: 220, damping: 22 });
  const ringY = useSpring(ringYValue, { stiffness: 220, damping: 22 });

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX - 2.5);
      y.set(event.clientY - 2.5);
      ringXValue.set(event.clientX - 15);
      ringYValue.set(event.clientY - 15);
    };

    const enterInteractive = (event) => {
      if (event.target.closest("a, button, [data-cursor='interactive']")) {
        document.body.classList.add("cursor-active");
      }
    };

    const leaveInteractive = () => {
      document.body.classList.remove("cursor-active");
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enterInteractive);
    document.addEventListener("mouseout", leaveInteractive);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enterInteractive);
      document.removeEventListener("mouseout", leaveInteractive);
    };
  }, [x, y, ringXValue, ringYValue]);

  return (
    <>
      <motion.span
        ref={cursor}
        className="cursor-dot"
        style={{ x, y }}
      />
      <motion.span
        ref={ring}
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
