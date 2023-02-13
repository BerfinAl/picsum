import { useState, useRef, useEffect } from "react";

export default function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    setIsHovered(false);
  }

  useEffect(() => {
    const instance = ref.current;
    if (instance) {
      instance.addEventListener("mouseenter", handleMouseEnter);
      instance.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (instance) {
        instance.removeEventListener("mouseenter", handleMouseEnter);
        instance.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return { isHovered, ref };
}
