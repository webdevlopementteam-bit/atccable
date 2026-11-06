// A single full-width insulated cable whose printed marking scrolls along the
// jacket — like the "ATC CABLES 1100V" print found on every metre of real wire.
// Used as a divider below homepage sections; pick a colour with `variant`.

const CABLES = {
  red: { jacket: "#d42a2a", ink: "rgba(255,255,255,0.88)", size: "1.5", grade: "FR", speed: 38, reverse: false },
  black: { jacket: "#1c1d21", ink: "rgba(255,255,255,0.82)", size: "2.5", grade: "FRLS", speed: 46, reverse: true },
  yellow: { jacket: "#f2c418", ink: "rgba(20,20,20,0.82)", size: "4.0", grade: "HR 105°C", speed: 42, reverse: false },
  blue: { jacket: "#1f63c9", ink: "rgba(255,255,255,0.88)", size: "6.0", grade: "ZHFR", speed: 50, reverse: true },
};

function Marking({ size, grade }) {
  return (
    <span className="flex shrink-0 items-center gap-6 pr-6">
      <span className="font-bold">ATC CABLES®</span>
      <span>·</span>
      <span>1100 V</span>
      <span>·</span>
      <span>{size} SQ.MM</span>
      <span>·</span>
      <span>{grade}</span>
      <span>·</span>
      <span>IS : 694</span>
      <span>·</span>
      <span className="rounded-sm border border-current px-1 leading-none">ISI</span>
      <span>·</span>
      <span>MADE IN INDIA</span>
      <span>·</span>
    </span>
  );
}

export default function CableMarquee({ variant = "red" }) {
  const c = CABLES[variant];
  return (
    <div
      className="relative h-11 w-full overflow-hidden md:h-14"
      style={{
        background: c.jacket,
        boxShadow: "inset 0 7px 10px rgba(255,255,255,0.28), inset 0 -10px 14px rgba(0,0,0,0.38), 0 14px 22px -14px rgba(10,18,34,0.5)",
      }}
      role="img"
      aria-label={`ATC cable marking: ATC CABLES, 1100 V, ${c.size} sq.mm, ${c.grade}, IS 694, ISI`}
    >
      {/* specular highlight running along the jacket */}
      <span className="pointer-events-none absolute inset-x-0 top-[16%] h-[13%] rounded-full bg-white/30 blur-[3px]" aria-hidden />
      <div
        className="animate-marquee flex h-full w-max items-center font-mono text-[13px] font-medium tracking-[0.22em] whitespace-nowrap uppercase md:text-[15px]"
        style={{
          color: c.ink,
          animationDuration: `${c.speed}s`,
          animationDirection: c.reverse ? "reverse" : "normal",
          textShadow: "0 1px 0 rgba(0,0,0,0.25)",
        }}
        aria-hidden
      >
        {Array.from({ length: 8 }).map((_, k) => (
          <Marking key={k} size={c.size} grade={c.grade} />
        ))}
      </div>
    </div>
  );
}
