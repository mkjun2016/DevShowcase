import { useEffect, useState, useRef } from "react";

export function useScrollObserver(
  options = { threshold: 0.1, triggerOnce: false }
) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: options.threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView] as const;
}
