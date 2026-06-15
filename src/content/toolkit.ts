import {
  siReact,
  siNextdotjs,
  siFlutter,
  siNodedotjs,
  siTypescript,
  siPython,
  siPostgresql,
  siMongodb,
  siGooglecloud,
  siDocker,
  siKubernetes,
  siTensorflow,
  siRedis,
} from "simple-icons";
import { Cloud, Cpu, type LucideIcon } from "lucide-react";

type SimpleIcon = { title: string; hex: string; path: string };

export type Tool = {
  name: string;
  /** simple-icons svg path data (rendered monochrome) */
  path?: string;
  /** lucide fallback icon when no brand mark exists */
  Icon?: LucideIcon;
  /** brand colour shown on hover; null falls back to foreground */
  color: string | null;
};

const si = (icon: SimpleIcon, name?: string): Tool => ({
  name: name ?? icon.title,
  path: icon.path,
  color: `#${icon.hex}`,
});

// Order mirrors the previous techStack list.
export const toolkit: Tool[] = [
  si(siReact),
  { ...si(siNextdotjs), color: null }, // brand mark is pure black — brighten on hover instead
  si(siFlutter),
  si(siNodedotjs, "Node.js"),
  si(siTypescript),
  si(siPython),
  si(siPostgresql),
  si(siMongodb),
  { name: "AWS", Icon: Cloud, color: "#FF9900" },
  { name: "Azure", Icon: Cloud, color: "#0078D4" },
  si(siGooglecloud, "Google Cloud"),
  si(siDocker),
  si(siKubernetes),
  { name: "IoT Platforms", Icon: Cpu, color: "#6c2f93" },
  si(siTensorflow),
  si(siRedis),
];
