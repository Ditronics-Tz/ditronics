import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={36}
        height={36}
        priority
        className="size-9 rounded-full transition-transform duration-300 group-hover:scale-105"
      />
      {showText && (
        <span className="text-lg font-bold tracking-tight font-heading">
          Ditronics
        </span>
      )}
    </Link>
  );
}
