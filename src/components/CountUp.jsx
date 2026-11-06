"use client";

import { useEffect, useRef, useState } from "react";

// Animates a stat like "35+", "100%" or "1991" when it scrolls into view.
// Renders the final value first, so it reads correctly without JavaScript.
export default function CountUp({ value, duration = 1600 }) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || !ref.current) return;
    const [, prefix, digits, suffix] = match;
    const end = Number(digits);
    const start = end > 1000 ? end - 60 : 0;
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(`${prefix}${Math.round(start + (end - start) * eased)}${suffix}`);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <span ref={ref} className="tabular-nums">{display}</span>;
}
