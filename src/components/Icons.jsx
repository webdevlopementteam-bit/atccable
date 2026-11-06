const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const make = (paths) =>
  function Icon({ className = "h-5 w-5" }) {
    return (
      <svg viewBox="0 0 24 24" className={className} {...base}>
        {paths}
      </svg>
    );
  };

export const ArrowRight = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowUpRight = make(<path d="M7 17 17 7M8 7h9v9" />);
export const Phone = make(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />);
export const Mail = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>);
export const MapPin = make(<><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></>);
export const Download = make(<path d="M12 3v12m0 0 5-5m-5 5-5-5M4 21h16" />);
export const Shield = make(<><path d="M12 3 4 6v6c0 5 3.4 8.6 8 9 4.6-.4 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>);
export const Bolt = make(<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />);
export const Flame = make(<path d="M12 22c4 0 7-2.7 7-7 0-4-3-6-4-9-1 2-2 3-3 3 0-2-1-4-2-6-1 4-5 7-5 12 0 4.3 3 7 7 7Z" />);
export const Flask = make(<><path d="M9 3h6M10 3v6L4.5 19A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3" /><path d="M7 15h10" /></>);
export const Factory = make(<><path d="M3 21V10l6 4V10l6 4V6l6-3v18H3Z" /><path d="M7 17h2m4 0h2" /></>);
export const Award = make(<><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" /></>);
export const Check = make(<path d="m5 12 5 5 9-10" />);
export const Menu = make(<path d="M4 7h16M4 12h16M4 17h16" />);
export const Close = make(<path d="M6 6l12 12M18 6 6 18" />);
export const Layers = make(<><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>);
export const Gauge = make(<><path d="M12 14l4-4" /><path d="M3.5 18a9 9 0 1 1 17 0" /></>);
export const Facebook = make(<path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V10H5.5v3.5H8V21h3.5v-7.5H14l.5-3.5h-3V8a1 1 0 0 1 1-1H15V3Z" />);
export const File = make(<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>);
export const Handshake = make(<><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a2 2 0 0 0-2.8 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a3.9 3.9 0 0 1 4.8-.6l.5.3a3 3 0 0 0 2.1.4L21 4" /><path d="m21 3 1 11h-2" /><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" /><path d="M3 4h8" /></>);
export const Certificate = make(<><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" /><path d="M14 3v5h5v2" /><path d="M9 9h2M9 13h4M9 17h2" /><circle cx="17" cy="15" r="3" /><path d="m15.5 17.5-.5 4 2-1 2 1-.5-4" /></>);
export const Thermometer = make(<><path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0Z" /><path d="M12 9v8" /><path d="M17 5h2M17 8h2M17 11h2" /></>);
export const Globe = make(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>);
export const Gear = make(<><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></>);
export const Home = make(<><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9v12h14V9" /><path d="M10 21v-6h4v6" /></>);
export const Tower = make(<><path d="M12 2 7 22M12 2l5 20" /><path d="M5 7h14M7 11h10M9.5 7l5 4m0-4-5 4M8 16h8M8 16l7 6M16 16l-7 6" /></>);
export const ExternalLink = make(<><path d="M14 4h6v6" /><path d="M20 4 11 13" /><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" /></>);
export const ShieldCheck = make(<><path d="M12 3 4 6v6c0 5 3.4 8.6 8 9 4.6-.4 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>);

// Red PDF document badge used in download lists
export function PdfIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 28" className={className} aria-hidden="true">
      <path d="M3 1h12l6 6v18a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2Z" fill="#fde2e2" stroke="#e5484d" strokeWidth="1.5" />
      <path d="M15 1v6h6" fill="none" stroke="#e5484d" strokeWidth="1.5" />
      <rect x="1" y="15" width="16" height="8" rx="1.5" fill="#e5484d" />
      <text x="9" y="21.2" textAnchor="middle" fontSize="5.6" fontWeight="700" fill="#fff" fontFamily="sans-serif">PDF</text>
    </svg>
  );
}
export const Building = make(<><path d="M3 21h18" /><path d="M5 21V10l5-3v14" /><path d="M10 21V4h9v17" /><path d="M13 8h3M13 12h3M13 16h3M7 13h1M7 17h1" /></>);
export const Users = make(<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><circle cx="17" cy="9" r="2.5" /><path d="M16 14.2a5 5 0 0 1 5.5 5.3" /></>);
export const Network = make(<><circle cx="5" cy="5" r="2.5" /><circle cx="19" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M7 7l3.5 3.5M17 7l-3.5 3.5M7 17l3.5-3.5M17 17l-3.5-3.5" /><circle cx="12" cy="12" r="1.8" /></>);
export const Truck = make(<><path d="M2 6h11v10H2z" /><path d="M13 9h4l4 4v3h-8" /><circle cx="6" cy="17.5" r="2" /><circle cx="17" cy="17.5" r="2" /></>);
export const Box = make(<><path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" /><path d="m3 7 9 5 9-5M12 12v10" /></>);
export const Bank = make(<><path d="M3 9 12 4l9 5" /><path d="M4 9h16M5 9v9M9 9v9M15 9v9M19 9v9M3 21h18M4 18h16" /></>);
export const Coil = make(<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v4c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 10v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" /><path d="M4 14v4c0 1.7 3.6 3 8 3s8-1.3 8-3v-4" /></>);
export const CableEnd = make(<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="8" r="2" /><circle cx="8.5" cy="14" r="2" /><circle cx="15.5" cy="14" r="2" /></>);
export const Bulb = make(<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" /></>);
export const Floodlight = make(<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M7 8h2M11 8h2M15 8h2M7 12h2M11 12h2M15 12h2M12 16v4M8 20h8" /></>);
export const Flexible = make(<path d="M18 5.5A8 8 0 1 0 18 18.5M15 8.5a4 4 0 1 0 0 7" />);
export const Braid = make(<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="m3 9 6-6M3 15 15 3M3 21 21 3M9 21l12-12M15 21l6-6" /></>);
export const Waves = make(<path d="M2 8c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0M2 14c2.5-2 4.5-2 7 0s4.5 2 7 0 4.5-2 6 0" />);
export const Board = make(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h4v4H7zM13 7h4M13 11h4M7 15h10M7 18h6" /></>);
export const Sun = make(<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>);
export const Grid = make(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></>);
export const Spot = make(<><path d="M4 14 14 4l4 4-10 10z" /><path d="m9 15 4 6M18 8l3-3" /><circle cx="6" cy="20" r="1" /></>);
export const Wall = make(<><path d="M4 21h16M6 21V11M12 21V5M18 21V9" /><path d="M4 11h4M10 5h4M16 9h4" /></>);
export const Strip = make(<><rect x="2" y="9" width="20" height="6" rx="3" /><circle cx="7" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="17" cy="12" r="1" /></>);
export const StreetLamp = make(<path d="M7 21V7a4 4 0 0 1 4-4h2a3 3 0 0 1 3 3v1M14 7h5l-1 3h-3zM4 21h6" />);
export const HighBay = make(<><path d="M12 3v4M7 7h10l3 7H4z" /><path d="M9 18l-1 2M12 18v3M15 18l1 2" /></>);
export const Tube = make(<><rect x="2" y="10" width="20" height="4" rx="2" /><path d="M5 7l1 2M12 6v2M19 7l-1 2M5 17l1-2M12 18v-2M19 17l-1-2" /></>);
export const Monitor = make(<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4M8 8h3v4H8zM13 8h3M13 11h3" /></>);
export const Sparkles = make(<><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" /><path d="M19 3v4M21 5h-4" /></>);

