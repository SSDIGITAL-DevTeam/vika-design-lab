import {
  ShieldCheck,
  Users,
  Box,
  Clock,
  Tag,
  Award,
  PawPrint,
  Star,
  Zap,
  Key,
  Leaf,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Check,
  Menu,
  X,
  Home,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  // USP cards
  shield: ShieldCheck,   // Full Refund Guarantee
  users: Users,          // Two Designers on Every Job
  cube: Box,             // 3D Immersive Design Preview
  clock: Clock,          // Quote in Under a Week
  tag: Tag,              // Affordable Pricing
  badge: Award,          // 5-Year Workmanship Warranty

  // Speciality services
  paw: PawPrint,         // Pet-Friendly Home Design
  star: Star,            // Kids' Room Themed Packages
  bolt: Zap,             // Smart Home Integration
  key: Key,              // Single-Room Premium Renovation
  leaf: Leaf,            // Sustainable / Rainwater Design

  // Stats strip
  home: Home,            // Homes Transformed

  // UI / navigation
  arrow: ArrowRight,
  chevron: ChevronDown,
  check: Check,
  menu: Menu,
  close: X,

  // Contact
  phone: Phone,
  mail: Mail,
  pin: MapPin,
};

const WhatsAppSVG = (props: LucideProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    width={props.size ?? 24}
    height={props.size ?? 24}
    className={props.className}
  >
    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.9.9-2.7-.2-.3A8 8 0 1 1 12 20Zm4.6-5.9c-.3-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.6.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.5v-.5c0-.1-.6-1.5-.8-2s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7s1.9 2.9 4.6 4a5.3 5.3 0 0 0 2.3.5 2 2 0 0 0 1.3-.9 2.3 2.3 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.3Z" />
  </svg>
);

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
  ...rest
}: { name: string } & LucideProps) {
  if (name === "whatsapp") return <WhatsAppSVG className={className} {...rest} />;
  const LucideComponent = ICONS[name] ?? Check;
  return (
    <LucideComponent
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden
      {...rest}
    />
  );
}
