"use client";

import { useEffect, useRef } from "react";

// Full-width hero video. AV1 is ~20% smaller; browsers without it fall back to H.264.
export default function HeroVideo() {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React doesn't reliably output the `muted` attribute, and autoplay needs it.
    video.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className="block aspect-[4/3] w-full bg-navy-900 object-cover md:aspect-[1380/700]"
      poster="/videos/hero-poster.webp"
      muted
      loop
      playsInline
      preload="auto"
      aria-label="ATC cables: from the factory floor to homes, offices, power lines and cities around the world"
    >
      <source src="/videos/hero-av1.mp4" type='video/mp4; codecs="av01.0.05M.08"' />
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
