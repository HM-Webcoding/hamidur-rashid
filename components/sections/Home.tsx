"use client";

import { Button } from "@/components/ui/button";
import { personal } from "@/lib/data";
import { ArrowRight, Github } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-12 py-20 overflow-hidden"
    >
      {/* Available badge */}
      <div className="inline-flex items-center gap-2 w-fit mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-gradient-primary" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-primary" />
        </span>
        <span className="text-xs font-semibold text-[hsl(var(--muted-foreground))] tracking-widest uppercase">
          Available for work
        </span>
      </div>

      {/* Main heading */}
      <div className="mb-6">
        <p className="section-label mb-3">// Hello World</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.92] tracking-tight mb-4">
          Hi, I'm{" "}
          <span className="text-gradient">{personal.name.split(" ")[0]}</span>
          <br />
          <span className="text-[hsl(var(--foreground))]">
            {personal.title}
          </span>
        </h1>
        <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed font-medium">
          {personal.bio}
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        <Button
          size="lg"
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="gap-2 font-bold"
        >
          View My Work
          <ArrowRight size={16} />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="gap-2 font-bold"
          onClick={() =>
            window.open(`https://github.com/${personal.github}`, "_blank")
          }
        >
          <Github size={16} />
          GitHub
        </Button>
      </div>

      {/* GitHub contribution graph */}
      <div className="glass-card p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Github size={12} className="text-white" />
            </div>
            <span className="text-base font-bold">GitHub Contributions</span>
          </div>
          <a
            href={`https://github.com/${personal.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gradient font-semibold hover:opacity-80 transition-opacity"
          >
            @{personal.github} →
          </a>
        </div>
        <div className="w-full overflow-hidden rounded-lg bg-[hsl(var(--muted))] p-1">
          <img
            src={`https://ghchart.rshah.org/0d9488/${personal.github}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto"
            onError={(e) => {
              const t = e.target as HTMLImageElement;
              t.style.display = "none";
              const p = t.parentElement;
              if (p)
                p.innerHTML =
                  '<div class="h-16 flex items-center justify-center text-xs text-[hsl(var(--muted-foreground))] font-mono">Loading contributions...</div>';
            }}
          />
        </div>
        <p className="text-xs text-[hsl(var(--muted-foreground))] mt-3 text-right font-mono">
          Contribution activity on GitHub
        </p>
      </div>
    </section>
  );
}
