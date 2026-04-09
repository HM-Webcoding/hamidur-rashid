"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Briefcase,
  FolderOpen,
  Home,
  Mail,
  Menu,
  Moon,
  Sun,
  Wrench,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "skills", icon: Wrench, label: "Skills & Tools" },
  { id: "contact", icon: Mail, label: "Contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function RightNav({ mobile = false }: { mobile?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ThemeBtn = () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-10 h-10 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--foreground))]/20 transition-all duration-200 mt-2"
        >
          {mounted && theme === "dark" ? (
            <Sun size={16} strokeWidth={1.8} />
          ) : (
            <Moon size={16} strokeWidth={1.8} />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent side="left">
        {mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
      </TooltipContent>
    </Tooltip>
  );

  /* Mobile: just theme toggle + hamburger for small screens */
  if (mobile) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-9 h-9 rounded-xl border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))]"
        >
          {mounted && theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 rounded-xl border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--muted-foreground))]"
        >
          {mobileOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-[hsl(var(--card))] border-b border-[hsl(var(--border))] py-3 px-4 flex gap-2 flex-wrap">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollTo(item.id);
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium hover:bg-[hsl(var(--muted))] transition-colors"
                >
                  <Icon size={14} /> {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  /* Desktop right nav */
  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-6 px-3 border-l border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 backdrop-blur-xl">
      {/* Nav items */}
      <nav className="flex flex-col items-center gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <Tooltip key={item.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`
                    relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200
                    ${
                      isActive
                        ? "bg-gradient-primary text-white shadow-lg"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
                    }
                  `}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.2 : 1.8} />
                  {isActive && (
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-gradient-primary" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent side="left">{item.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </nav>

      {/* Theme toggle */}
      <ThemeBtn />
    </div>
  );
}
