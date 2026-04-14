"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe,
  Layers,
  MonitorPlay,
  Pause,
  Play,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  User,
  X,
  Zap,
} from "lucide-react";
import { notFound, useRouter } from "next/navigation";
import { useRef, useState } from "react";

// ─── DUMMY DATA (replace with real fields from your data.ts) ──────────────────
const DUMMY = {
  status: "Live" as const,
  duration: "3 months",
  role: "Solo Developer",
  overview:
    "A production-grade web application built to solve a real-world problem with modern tooling. Designed with a focus on performance, accessibility, and a seamless user experience across all devices.",
  problem:
    "Existing solutions were either too complex for everyday users or too limited for power users who needed real-time data and detailed analytics. There was a clear gap in the market for something both powerful and approachable.",
  solution:
    "Built a full-featured application using Next.js 14 with the App Router, leveraging server components for performance and client components for interactivity. A CSS variable–based design system ensures visual consistency across 30+ components in both dark and light modes.",
  features: [
    {
      icon: <TrendingUp size={18} />,
      title: "Interactive Analytics",
      description:
        "Recharts-powered charts with animated transitions, tooltips, and responsive breakpoints for deep data exploration.",
    },
    {
      icon: <Shield size={18} />,
      title: "Secure Authentication",
      description:
        "Role-based access control with Firebase Auth, persistent sessions, and Next.js middleware route protection.",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Fully Responsive",
      description:
        "Pixel-perfect layout on all screen sizes. Every component adapts gracefully from mobile to ultrawide displays.",
    },
    {
      icon: <Zap size={18} />,
      title: "Edge Performance",
      description:
        "Deployed on Vercel's edge network. Sub-100ms TTFB globally, Lighthouse score 95+ on all categories.",
    },
    {
      icon: <Layers size={18} />,
      title: "Component System",
      description:
        "shadcn/ui primitives extended with a custom design system — reusable, accessible, and theme-aware.",
    },
    {
      icon: <Cpu size={18} />,
      title: "Real-time Sync",
      description:
        "Firebase Firestore listeners for instant UI updates across concurrent sessions without page refresh.",
    },
    {
      icon: <MonitorPlay size={18} />,
      title: "Dark / Light Mode",
      description:
        "Full theme switching with smooth CSS variable transitions. System preference detected on first load.",
    },
    {
      icon: <Globe size={18} />,
      title: "API Integration",
      description:
        "REST API calls with SWR for stale-while-revalidate caching, error boundaries, and loading skeletons.",
    },
  ],
  highlights: [
    "Built entirely with TypeScript for end-to-end type safety across all components and API routes",
    "Custom React hooks for data fetching, theme management, and responsive breakpoints",
    "Optimised bundle size with dynamic imports and Next.js code splitting — initial JS < 80 KB",
    "CSS custom properties for all design tokens — a single variable change updates the entire UI",
    "Semantic HTML5 structure with ARIA labels for full WCAG 2.1 AA accessibility compliance",
    "Automated preview deployments on every pull request via Vercel + GitHub Actions CI/CD",
  ],
  // Dummy media — replace src values with your real paths in /public
  media: [
    {
      type: "image",
      src: "",
      alt: "Dashboard overview",
      caption: "Main dashboard — overview of all data at a glance",
    },
    {
      type: "image",
      src: "",
      alt: "Analytics screen",
      caption: "Analytics view with interactive Recharts graphs",
    },
    {
      type: "image",
      src: "",
      alt: "Mobile responsive",
      caption: "Fully responsive layout on mobile devices",
    },
    {
      type: "gif",
      src: "",
      alt: "Feature walkthrough",
      caption: "Live interaction demo — add yours as /public/demo.gif",
    },
  ],
};

// ─── STATUS BADGE ─────────────────────────────────────────────────────────────
function StatusBadge({
  status,
  color,
}: {
  status: "Live" | "In Progress" | "Archived";
  color: string;
}) {
  const cfg = {
    Live: { pulse: true, label: "Live" },
    "In Progress": { pulse: true, label: "In Progress" },
    Archived: { pulse: false, label: "Archived" },
  }[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border"
      style={{
        color,
        borderColor: `color-mix(in srgb, ${color} 40%, transparent)`,
        background: `color-mix(in srgb, ${color} 10%, transparent)`,
      }}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${cfg.pulse ? "animate-pulse" : ""}`}
        style={{ background: color }}
      />
      {cfg.label}
    </span>
  );
}

// ─── SECTION HEADING ──────────────────────────────────────────────────────────
function SectionHeading({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-1 h-6 rounded-full flex-shrink-0"
        style={{ background: color }}
      />
      <h2 className="text-xl font-black">{label}</h2>
    </div>
  );
}

// ─── MEDIA PLACEHOLDER CARD ───────────────────────────────────────────────────
function MediaCard({
  item,
  index,
  color,
  onClick,
}: {
  item: (typeof DUMMY.media)[0];
  index: number;
  color: string;
  onClick: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const typeBadge = { image: "🖼️ Image", gif: "🎞️ GIF", video: "🎬 Video" }[
    item.type
  ];

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };

  const isEmpty = !item.src;

  return (
    <div
      className="glass-card overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      {/* Thumbnail area */}
      <div className="relative w-full aspect-video bg-[hsl(var(--muted))] overflow-hidden flex items-center justify-center">
        {isEmpty ? (
          /* Empty state — pretty placeholder */
          <div
            className="flex flex-col items-center gap-3 p-6 text-center w-full h-full justify-center"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, ${color} 6%, hsl(var(--muted))), hsl(var(--muted)))`,
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: `color-mix(in srgb, ${color} 15%, transparent)`,
                color,
              }}
            >
              {item.type === "gif" ? "🎞️" : item.type === "video" ? "🎬" : "🖼️"}
            </div>
            <div>
              <p className="text-xs font-bold text-[hsl(var(--foreground))] mb-1">
                {item.alt}
              </p>
              <p className="text-[10px] text-[hsl(var(--muted-foreground))]">
                Add{" "}
                <code className="px-1 py-0.5 rounded bg-[hsl(var(--card))] font-mono">
                  src
                </code>{" "}
                in{" "}
                <code className="px-1 py-0.5 rounded bg-[hsl(var(--card))] font-mono">
                  lib/data.ts
                </code>
              </p>
            </div>
            {/* Index badge */}
            <span
              className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white"
              style={{ background: color }}
            >
              {index + 1}
            </span>
          </div>
        ) : item.type === "video" ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors"
              onClick={togglePlay}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110"
                style={{
                  background: `color-mix(in srgb, ${color} 80%, transparent)`,
                }}
              >
                {playing ? (
                  <Pause size={20} />
                ) : (
                  <Play size={20} className="ml-0.5" />
                )}
              </div>
            </button>
          </>
        ) : (
          <>
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                <ExternalLink size={14} />
              </div>
            </div>
          </>
        )}
        {/* Type badge */}
        {!isEmpty && (
          <span
            className="absolute top-3 left-3 px-2 py-0.5 rounded-lg text-[10px] font-bold backdrop-blur-sm text-white"
            style={{
              background: `color-mix(in srgb, ${color} 70%, transparent)`,
            }}
          >
            {typeBadge}
          </span>
        )}
      </div>
      {/* Caption */}
      {item.caption && (
        <div className="px-4 py-3">
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            {item.caption}
          </p>
        </div>
      )}
    </div>
  );
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({
  media,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  media: typeof DUMMY.media;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = media[index];
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors z-10"
      >
        <X size={16} />
      </button>
      {media.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors z-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors z-10"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}
      <div
        className="max-w-5xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {item.src ? (
          item.type === "video" ? (
            <video
              src={item.src}
              controls
              autoPlay
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
          ) : (
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
          )
        ) : (
          <div className="w-full aspect-video rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center">
            <p className="text-base text-[hsl(var(--muted-foreground))]">
              No media source set
            </p>
          </div>
        )}
        {item.caption && (
          <p className="text-base text-zinc-400 text-center">{item.caption}</p>
        )}
        {media.length > 1 && (
          <p className="text-xs text-zinc-600 font-mono">
            {index + 1} / {media.length}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function ProjectDetails({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const color = project.color ?? "#0d9488";
  const media = DUMMY.media; // swap with project.media when you add it to data.ts
  const nextIdx =
    (projects.findIndex((p) => p.slug === params.slug) + 1) % projects.length;
  const next = projects[nextIdx];

  return (
    <>
      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          media={media}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onPrev={() =>
            setLightbox((lightbox - 1 + media.length) % media.length)
          }
          onNext={() => setLightbox((lightbox + 1) % media.length)}
        />
      )}

      <div className="min-h-screen">
        {/* ══════════════════════════════════════════════════
            HERO BANNER
        ══════════════════════════════════════════════════ */}
        <div className="relative overflow-hidden border-b border-[hsl(var(--border))]">
          {/* Atmospheric glow blobs */}
          <div
            className="absolute top-0 right-0 w-[520px] h-[380px] rounded-full blur-[100px] opacity-[0.14] pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, ${color}, transparent)`,
            }}
          />
          <div
            className="absolute -bottom-16 left-0 w-72 h-72 rounded-full blur-[80px] opacity-[0.08] pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, var(--grad-to), transparent)`,
            }}
          />

          <div className="relative z-10 px-8 md:px-12 pt-10 pb-14">
            {/* Back navigation */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors mb-10 group w-fit"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              Back to projects
            </button>

            {/* Title + actions */}
            <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
              <div className="flex flex-col gap-2">
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <StatusBadge status={DUMMY.status} color={color} />
                  <span className="text-[10px] font-mono text-[hsl(var(--muted-foreground))] bg-[hsl(var(--muted))] px-2 py-0.5 rounded-md border border-[hsl(var(--border))]">
                    #{String(project.id ?? 1).padStart(2, "0")}
                  </span>
                  {project.featured && (
                    <span
                      className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md"
                      style={{
                        color,
                        background: `color-mix(in srgb, ${color} 10%, transparent)`,
                      }}
                    >
                      <Star size={9} className="fill-current" /> Featured
                    </span>
                  )}
                </div>

                {/* Name */}
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.0]">
                  {project.title}
                </h1>
                <p
                  className="text-base font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${color}, var(--grad-to))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-2.5 flex-wrap">
                {project.codeLink && project.codeLink !== "#" && (
                  <Button variant="outline" className="gap-2" asChild>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} /> View Code
                    </a>
                  </Button>
                )}
                {project.liveLink && project.liveLink !== "#" && (
                  <Button className="gap-2" asChild>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                {
                  icon: <Clock size={12} />,
                  label: "Duration",
                  value: DUMMY.duration,
                },
                { icon: <User size={12} />, label: "Role", value: DUMMY.role },
                {
                  icon: <Calendar size={12} />,
                  label: "Status",
                  value: DUMMY.status,
                },
                {
                  icon: <Code2 size={12} />,
                  label: "Stack",
                  value:
                    project.tech?.slice(0, 2).join(", ") +
                    (project.tech?.length > 2
                      ? " +" + (project.tech.length - 2)
                      : ""),
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/80 backdrop-blur-sm"
                >
                  <span className="text-[hsl(var(--muted-foreground))]">
                    {m.icon}
                  </span>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-[hsl(var(--muted-foreground))] leading-none mb-0.5">
                      {m.label}
                    </p>
                    <p className="text-xs font-bold leading-none">{m.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Full tech stack pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech?.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold border"
                  style={{
                    borderColor: `color-mix(in srgb, ${color} 35%, transparent)`,
                    color,
                    background: `color-mix(in srgb, ${color} 8%, transparent)`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            BODY CONTENT
        ══════════════════════════════════════════════════ */}
        <div className="px-8 md:px-12 py-14 flex flex-col gap-16 max-w-5xl">
          {/* ── Overview ── */}
          <section>
            <SectionHeading label="Overview" color={color} />
            <p className="text-[hsl(var(--muted-foreground))] leading-[1.85] text-base max-w-3xl">
              {DUMMY.overview}
            </p>
          </section>

          {/* ── Problem / Solution ── */}
          <section className="grid md:grid-cols-2 gap-5">
            <div className="glass-card p-6 md:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[hsl(var(--muted))] flex items-center justify-center text-xl">
                  🎯
                </div>
                <h3 className="font-black text-base">The Problem</h3>
              </div>
              <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
                {DUMMY.problem}
              </p>
            </div>
            <div
              className="glass-card p-6 md:p-7"
              style={{
                borderColor: `color-mix(in srgb, ${color} 28%, transparent)`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: `color-mix(in srgb, ${color} 15%, hsl(var(--muted)))`,
                  }}
                >
                  💡
                </div>
                <h3 className="font-black text-base">The Solution</h3>
              </div>
              <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
                {DUMMY.solution}
              </p>
            </div>
          </section>

          {/* ── Media Gallery ── */}
          <section>
            <SectionHeading label="Screenshots & Demo" color={color} />
            <div className="grid sm:grid-cols-2 gap-5">
              {media.map((item, i) => (
                <MediaCard
                  key={i}
                  item={item}
                  index={i}
                  color={color}
                  onClick={() => setLightbox(i)}
                />
              ))}
            </div>
            <p className="text-xs text-[hsl(var(--muted-foreground))] mt-4 font-mono text-center opacity-60">
              Add real screenshots/GIFs/videos by setting <code>src</code> paths
              in <code>lib/data.ts → project.media[]</code>
            </p>
          </section>

          {/* ── Features grid ── */}
          <section>
            <SectionHeading label="Key Features" color={color} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DUMMY.features.map((f, i) => (
                <div
                  key={i}
                  className="glass-card p-5 flex flex-col gap-3 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{
                      background: `color-mix(in srgb, ${color} 12%, hsl(var(--muted)))`,
                      color,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-base mb-1.5">{f.title}</h4>
                    <p className="text-[11px] text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Technical highlights ── */}
          <section>
            <SectionHeading label="Technical Highlights" color={color} />
            <div
              className="glass-card p-6 md:p-8"
              style={{
                borderColor: `color-mix(in srgb, ${color} 20%, transparent)`,
              }}
            >
              <div className="grid md:grid-cols-2 gap-3">
                {DUMMY.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-base text-[hsl(var(--muted-foreground))]"
                  >
                    <CheckCircle
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color }}
                    />
                    <span className="leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Description (from data.ts) ── */}
          <section>
            <SectionHeading label="About This Project" color={color} />
            <div className="glass-card p-6 md:p-8 relative overflow-hidden">
              {/* Decorative accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{
                  background: `linear-gradient(to bottom, ${color}, var(--grad-to))`,
                }}
              />
              <p className="text-[hsl(var(--muted-foreground))] leading-[1.9] text-base pl-2">
                {project.description}
              </p>
            </div>
          </section>

          {/* ── Next / Prev navigation ── */}
          <section>
            <div className="h-px w-full bg-[hsl(var(--border))] mb-10" />
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors group"
              >
                <ArrowLeft
                  size={14}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                All Projects
              </button>

              {next && (
                <button
                  onClick={() => router.push(`/project/${next.slug}`)}
                  className="glass-card flex items-center gap-4 px-5 py-3.5 group hover:no-underline"
                >
                  <div className="text-right">
                    <p className="text-[9px] uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-0.5 font-mono">
                      Next Project
                    </p>
                    <p className="text-base font-black">{next.title}</p>
                    <p
                      className="text-[10px] font-semibold"
                      style={{ color: next.color }}
                    >
                      {next.subtitle}
                    </p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: next.color }}
                  >
                    <ChevronRight size={16} />
                  </div>
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
