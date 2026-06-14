import {
  Code2,
  Smartphone,
  Cpu,
  Cloud,
  Network,
  Server,
  ShieldCheck,
  Compass,
  Landmark,
  GraduationCap,
  HeartPulse,
  Sprout,
  Truck,
  ShoppingBag,
  Factory,
  Banknote,
  Users,
  Lightbulb,
  MapPin,
  Headset,
  TrendingUp,
  BadgeCheck,
  Award,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Cpu,
  Cloud,
  Network,
  Server,
  ShieldCheck,
  Compass,
  Landmark,
  GraduationCap,
  HeartPulse,
  Sprout,
  Truck,
  ShoppingBag,
  Factory,
  Banknote,
  Users,
  Lightbulb,
  MapPin,
  Headset,
  TrendingUp,
  BadgeCheck,
  Award,
  HeartHandshake,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Code2;
  return <Cmp className={className} aria-hidden="true" />;
}
