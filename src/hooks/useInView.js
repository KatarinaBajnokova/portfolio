import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for detecting if an element is in the viewport.
 * @param {Object} options - IntersectionObserver options.
 * @param {number} options.threshold - Visibility ratio (default: 0.3).
 * @param {boolean} options.once - Whether it should trigger only once (default: true).
 */
export default function useInView({ threshold = 0.3, once = true } = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isIntersecting];
}
