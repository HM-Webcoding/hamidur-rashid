"use client";

import { Button } from "@/components/ui/button";
import { personal } from "@/lib/data";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contacts = [
    {
      icon: <Mail size={15} />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: <Phone size={15} />,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    { icon: <MapPin size={15} />, label: "Location", value: personal.location },
  ];

  const socials = [
    {
      icon: <GithubIcon />,
      label: "GitHub",
      href: `https://github.com/${personal.github}`,
      handle: `@${personal.github}`,
    },
    {
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      href: `https://linkedin.com/in/${personal.linkedin}`,
      handle: `/in/${personal.linkedin}`,
    },
  ];

  return (
    <section
      id="contact"
      className="px-8 md:px-12 py-20 relative overflow-hidden"
    >
      {/* bg glow */}
      <div
        className="glow-blob glow-primary"
        style={{
          width: 400,
          height: 400,
          bottom: "-10%",
          left: "30%",
          opacity: 0.12,
        }}
      />

      <div className="mb-12 relative z-10">
        <p className="section-label mb-3">// 04. Contact</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          Let's Make Something <span className="text-gradient">Awesome</span>
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] mt-3 max-w-lg">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {/* Left — contact info */}
        <div className="flex flex-col gap-5">
          {contacts.map((c) => (
            <div key={c.label} className="glass-card p-4">
              {c.href ? (
                <a href={c.href} className="flex items-center gap-4 group">
                  <ContactIconWrap>{c.icon}</ContactIconWrap>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-base font-semibold group-hover:text-gradient transition-all">
                      {c.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4">
                  <ContactIconWrap>{c.icon}</ContactIconWrap>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-0.5">
                      {c.label}
                    </p>
                    <p className="text-base font-semibold">{c.value}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Social links */}
          <div className="grid grid-cols-2 gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div>
                  <p className="text-xs font-bold">{s.label}</p>
                  <p className="text-[10px] text-[hsl(var(--muted-foreground))] font-mono">
                    {s.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Availability note */}
          <div
            className="rounded-2xl p-5 border"
            style={{
              borderColor:
                "color-mix(in srgb, var(--grad-from) 30%, transparent)",
              background:
                "color-mix(in srgb, var(--grad-from) 6%, hsl(var(--card)))",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Available Now
              </span>
            </div>
            <p className="text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
              I'm currently open to freelance opportunities and full-time
              positions. Let's discuss how I can help bring your project to
              life.
            </p>
          </div>
        </div>

        {/* Right — contact form */}
        <div className="glass-card p-6 md:p-8 flex flex-col gap-5">
          <h3 className="text-lg font-black">Send a Message</h3>

          <div className="flex flex-col gap-4">
            <FormField
              label="Your Name"
              placeholder="John Doe"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <FormField
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-base text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[var(--grad-from)] transition-colors resize-none font-[Syne,sans-serif]"
              />
            </div>
          </div>

          <Button
            size="lg"
            className="w-full gap-2 font-bold"
            onClick={handleSend}
            disabled={!form.name || !form.email || !form.message}
          >
            {sent ? (
              <>
                <CheckCircle size={16} /> Message Ready — Opening Mail
              </>
            ) : (
              <>
                <Send size={15} /> Send Message
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-[hsl(var(--border))] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-xs font-black">
            HR
          </div>
          <span className="font-black text-base">Hamidur Rashid</span>
        </div>
        <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono">
          Built with Next.js · Tailwind · shadcn/ui
        </p>
        <p className="text-xs text-[hsl(var(--muted-foreground))] font-mono">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </section>
  );
}

function ContactIconWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
      {children}
    </div>
  );
}

function FormField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] text-base text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:border-[var(--grad-from)] transition-colors font-[Syne,sans-serif]"
      />
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
