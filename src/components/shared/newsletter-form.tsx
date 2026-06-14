"use client";

import * as React from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      toast.success("You're subscribed! Thanks for joining.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("flex w-full gap-2", className)}>
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.co.tz"
        aria-label="Email address"
        className="h-11"
      />
      <Button type="submit" size="lg" variant="gradient" disabled={loading}>
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            <span className="hidden sm:inline">Subscribe</span>
            <Send className="size-4 sm:hidden" />
          </>
        )}
      </Button>
    </form>
  );
}
