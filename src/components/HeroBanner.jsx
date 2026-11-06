import { getImageProps } from "next/image";

// Art-directed banner: the browser downloads only the image matching the viewport.
export default function HeroBanner() {
  const common = { alt: "When it's about life, trust only ATC — high quality electrical wires & cables", sizes: "100vw", priority: true };
  const { props: desktop } = getImageProps({ ...common, src: "/images/hero-desktop.webp", width: 1881, height: 836 });
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, src: "/images/hero-mobile.webp", width: 1122, height: 1402 });

  return (
    <picture className="block w-full">
      {/* With images unoptimized (static export) there is no srcSet, so fall back to the plain src. */}
      <source media="(min-width: 768px)" srcSet={desktop.srcSet || desktop.src} width={1881} height={836} />
      <img {...rest} srcSet={mobileSrcSet || undefined} className="block h-auto w-full" alt={common.alt} />
    </picture>
  );
}
