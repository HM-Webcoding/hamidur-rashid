import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import HomeSection from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
    <div className="divide-y divide-[hsl(var(--border))]">
      <HomeSection />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
