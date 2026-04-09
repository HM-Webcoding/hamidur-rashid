'use client'

import { skillCategories } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="px-8 md:px-12 py-20">
      <div className="mb-12">
        <p className="section-label mb-3">// 03. Stack</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Skills & <span className="text-gradient">Tools</span>
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] mt-3 max-w-lg">
          Technologies and tools I work with daily to craft great products.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            {/* Category heading */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px flex-1 opacity-20"
                style={{ background: cat.color }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-lg border"
                style={{
                  color: cat.color,
                  borderColor: `color-mix(in srgb, ${cat.color} 35%, transparent)`,
                  background: `color-mix(in srgb, ${cat.color} 8%, transparent)`,
                }}
              >
                {cat.label}
              </span>
              <div
                className="h-px flex-1 opacity-20"
                style={{ background: cat.color }}
              />
            </div>

            {/* Icon grid */}
            <div className="flex flex-wrap gap-4">
              {cat.skills.map((skill) => (
                <SkillTile key={skill.name} name={skill.name} icon={skill.icon} color={cat.color} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Currently learning */}
      <div className="mt-14 glass-card p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl flex-shrink-0">
          🚀
        </div>
        <div>
          <h4 className="font-black text-base mb-0.5">Currently Exploring</h4>
          <p className="text-base text-[hsl(var(--muted-foreground))]">
            Mastering Full-Stack Engineering — diving deep into backend architecture, REST APIs, and databases to become a complete developer.
          </p>
        </div>
      </div>
    </section>
  )
}

function SkillTile({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div
      className="skill-icon-wrap flex flex-col items-center gap-2 p-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] cursor-default w-[88px]"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5"
        style={{ background: `color-mix(in srgb, ${color} 10%, hsl(var(--muted)))` }}
      >
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain"
          onError={(e) => {
            const t = e.target as HTMLImageElement
            t.style.display = 'none'
            const p = t.parentElement
            if (p) {
              p.innerHTML = `<span style="font-size:10px;font-weight:700;color:${color}">${name.slice(0, 2).toUpperCase()}</span>`
            }
          }}
        />
      </div>
      {/* Label */}
      <span className="text-[10px] font-semibold text-center text-[hsl(var(--muted-foreground))] leading-tight">{name}</span>
    </div>
  )
}
