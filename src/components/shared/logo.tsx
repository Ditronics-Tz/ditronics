import Link from "next/link";
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
      <span className="relative inline-flex size-9 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="size-9 transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="ditronics-logo" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="55%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="11"
            fill="url(#ditronics-logo)"
          />
          <path
            d="M13 12h6.5c5 0 8.5 3.3 8.5 8s-3.5 8-8.5 8H13V12Zm5 4v8h1.5c2.6 0 4.3-1.6 4.3-4s-1.7-4-4.3-4H18Z"
            fill="white"
          />
          <circle cx="29.5" cy="13" r="2.2" fill="#a5f3fc" />
        </svg>
      </span>
      {showText && (
        <span className="text-lg font-bold tracking-tight font-heading">
          Ditronics
        </span>
      )}
    </Link>
  );
}
