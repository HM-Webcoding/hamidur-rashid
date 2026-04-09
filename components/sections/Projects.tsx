"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Star } from "lucide-react";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-8 md:px-12 py-20">
      <div className="mb-12">
        <p className="section-label mb-3">// 01. Work</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] mt-3 max-w-lg">
          A selection of projects I've built — from dashboards to real-time
          apps.
        </p>
      </div>

      {/* Featured project — large card */}
      {featured && (
        <div
          className="relative mb-8 rounded-2xl overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--card))] group hover:border-transparent transition-all duration-300"
          style={{ boxShadow: `0 0 0 0 transparent` }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = `0 0 40px color-mix(in srgb, ${featured.color} 20%, transparent)`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")
          }
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-primary" />

          {/* Glow blob inside card */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"
            style={{
              background: `radial-gradient(ellipse, ${featured.color}, transparent)`,
            }}
          />

          <div className="p-8 md:p-10 relative z-10">
            <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="section-label text-[10px]">
                    Featured Project
                  </span>
                  <Star
                    size={11}
                    className="text-gradient fill-current"
                    style={{ color: featured.color }}
                  />
                </div>
                <h3 className="text-3xl font-black">{featured.title}</h3>
                <p className="text-gradient font-semibold text-base mt-1">
                  {featured.subtitle}
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={featured.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github size={14} /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={featured.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-5 max-w-2xl">
              {featured.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <Badge
                  key={t}
                  className="px-3 py-1 text-xs font-semibold border"
                  style={{
                    borderColor: `color-mix(in srgb, ${featured.color} 40%, transparent)`,
                    color: featured.color,
                    background: `color-mix(in srgb, ${featured.color} 10%, transparent)`,
                  }}
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grid of remaining projects */}
      <div className="grid sm:grid-cols-2 gap-5">
        {rest.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div
      className="glass-card p-6 flex flex-col gap-4 cursor-default"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-black text-white"
          style={{
            background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
          }}
        >
          {String(index + 2).padStart(2, "0")}
        </div>
      </div>

      <div>
        <h3 className="font-black text-base mb-0.5">{project.title}</h3>
        <p
          className="text-xs font-semibold mb-2"
          style={{ color: project.color }}
        >
          {project.subtitle}
        </p>
        <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-[11px] font-medium border"
            style={{
              borderColor: `color-mix(in srgb, ${project.color} 30%, transparent)`,
              color: project.color,
              background: `color-mix(in srgb, ${project.color} 8%, transparent)`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        {project.codeLink !== "#" && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github size={14} /> Code
            </a>
          </Button>

          // <a
          //   href={project.codeLink}
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="w-8 h-8 rounded-lg border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-all"
          // >
          //   <Github size={13} />
          // </a>
        )}
        {project.liveLink !== "#" && (
          <Button size="sm" asChild>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          </Button>
          // <a
          //   href={project.liveLink}
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   className="w-8 h-8 rounded-lg border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] transition-all"
          // >
          //   <ExternalLink size={13} />
          // </a>
        )}
      </div>
    </div>
  );
}
