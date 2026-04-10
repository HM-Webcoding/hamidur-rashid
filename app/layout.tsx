"use client";

import LeftSidebar from "@/components/LeftSidebar";
import RightNav from "@/components/RightNav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Hamidur Rashid — Front-End Engineer</title>
        <meta
          name="description"
          content="Front-End Engineer specializing in Next.js, React, and pixel-perfect UI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="noise-overlay">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <TooltipProvider delayDuration={100}>
            {/* ── Desktop 3-col layout ── */}
            <div className="hidden lg:flex min-h-screen">
              {/* Left sidebar — fixed profile card */}
              <aside
                className="fixed top-2/4 left-10 transform -translate-y-2/4 z-40 flex flex-col"
                style={{ width: "var(--sidebar-w)" }}
              >
                <LeftSidebar />
              </aside>

              {/* Main scrollable content */}
              <main
                className="flex-1 min-h-screen"
                style={{
                  marginLeft: "calc(var(--sidebar-w) + 40px);",
                  marginRight: "calc(var(--rightnav-w) + 56px)",
                }}
              >
                {children}
              </main>

              {/* Right nav — fixed icon nav */}
              <aside
                className="fixed top-2/4 transform -translate-y-2/4 right-10 z-40"
                style={{ width: "var(--rightnav-w)" }}
              >
                <RightNav />
              </aside>
            </div>

            {/* ── Mobile layout ── */}
            <div className="lg:hidden flex flex-col min-h-screen">
              <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/90 backdrop-blur-xl px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-xs font-bold">
                      HR
                    </div>
                    <div>
                      <p className="text-base font-bold leading-none">
                        Hamidur Rashid
                      </p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))]">
                        Front-End Engineer
                      </p>
                    </div>
                  </div>
                  <RightNav mobile />
                </div>
              </header>
              <main className="flex-1 pb-6">{children}</main>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
