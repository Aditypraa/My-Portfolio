import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Skills />
      <TestimonialsSection />
    </div>
  );
}
