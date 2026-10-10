import type { CSSProperties } from "react";

export type IconName = "arrow" | "phone" | "mail" | "pin" | "headset" | "network" | "message" | "building" | "shield" | "server" | "gateway" | "cloud" | "check" | "chevron" | "close" | "menu" | "globe" | "layers" | "spark" | "box" | "clock";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  phone: <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  headset: <><path d="M4 13V10a8 8 0 0 1 16 0v7a4 4 0 0 1-4 4h-4" /><rect x="2" y="10" width="5" height="8" rx="2" /><rect x="17" y="10" width="5" height="8" rx="2" /></>,
  network: <><rect x="8" y="2" width="8" height="6" rx="1" /><rect x="2" y="16" width="7" height="6" rx="1" /><rect x="15" y="16" width="7" height="6" rx="1" /><path d="M12 8v4M5.5 16v-4h13v4" /></>,
  message: <><path d="M21 15a3 3 0 0 1-3 3H8l-5 4V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z" /><path d="M7 7h10M7 12h7" /></>,
  building: <><path d="M4 22V4l12-2v20M16 8h4v14M2 22h20M8 7h4M8 11h4M8 15h4M9 22v-3h3v3" /></>,
  shield: <><path d="m12 2 9 4v6c0 6-9 10-9 10S3 18 3 12V6Z" /><path d="m8 12 3 3 5-6" /></>,
  server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01M15 6.5h3M15 17.5h3M12 10v4" /></>,
  gateway: <><rect x="2" y="7" width="20" height="10" rx="2" /><path d="M6 11v2M10 11v2M14 11v2M18 11v2M7 3v4M17 17v4" /></>,
  cloud: <path d="M7 19a5 5 0 1 1 .2-10A7 7 0 0 1 21 11a4 4 0 0 1-1 8Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  globe: <><circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="10" /><path d="M2 12h20M4 6h16M4 18h16" /></>,
  layers: <><path d="m12 2 10 6-10 6L2 8Zm-10 11 10 6 10-6M2 18l10 6 10-6" /></>,
  spark: <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" /><path d="M20 2v4M18 4h4" /></>,
  box: <><path d="m12 2 9 5v10l-9 5-9-5V7ZM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

export default function Icon({ name, size = 24, className, style }: { name: IconName; size?: number; className?: string; style?: CSSProperties }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} style={style}>{paths[name]}</svg>;
}
