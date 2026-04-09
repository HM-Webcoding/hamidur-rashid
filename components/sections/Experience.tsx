"use client";

import { experience } from "@/lib/data";
import { Briefcase, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-12 py-20">
      <div className="mb-12">
        <p className="section-label mb-3">// 02. Career</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Work <span className="text-gradient">Experience</span>
        </h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px timeline-line opacity-30" />

        <div className="flex flex-col gap-8">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-16">
              {/* Timeline node */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg">
                <Briefcase size={16} className="text-white" />
              </div>

              <div className="glass-card p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-xl font-black">{exp.role}</h3>
                      {exp.current && (
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border"
                          style={{
                            borderColor:
                              "color-mix(in srgb, var(--grad-from) 40%, transparent)",
                            color: "var(--grad-from)",
                            background:
                              "color-mix(in srgb, var(--grad-from) 10%, transparent)",
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-current" />
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-base text-[hsl(var(--muted-foreground))]">
                      <span className="font-bold text-[hsl(var(--foreground))]">
                        {exp.company}
                      </span>
                      <span>·</span>
                      <a
                        href={exp.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-gradient font-semibold hover:opacity-80 transition-opacity"
                      >
                        {exp.product}
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[hsl(var(--muted))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-base text-[hsl(var(--muted-foreground))] mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <ul className="flex flex-col gap-2.5">
                  {exp.responsibilities.map((r, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-base text-[hsl(var(--muted-foreground))]"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-primary" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="relative pl-16 mt-8">
          <div className="absolute left-0 top-1 w-10 h-10 rounded-xl bg-[hsl(var(--muted))] border border-[hsl(var(--border))] flex items-center justify-center">
            <span className="text-lg">🎓</span>
          </div>
          <div className="glass-card p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-black mb-1">BBA in Accounting</h3>
                <p className="text-base text-[hsl(var(--muted-foreground))]">
                  National University, Bangladesh
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[hsl(var(--muted))] border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]">
                2017 — 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
