import { cn } from "@/lib/utils";

/** Decorative animated gradient blobs for hero/CTA backgrounds. */
export function GradientBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -left-24 top-0 size-[28rem] rounded-full bg-brand-blue/25 blur-3xl animate-blob" />
      <div className="absolute right-0 top-10 size-[24rem] rounded-full bg-brand-cyan/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/3 size-[26rem] rounded-full bg-brand-indigo/20 blur-3xl animate-blob [animation-delay:8s]" />
    </div>
  );
}

/** Subtle grid + radial-fade backdrop. */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    </div>
  );
}
