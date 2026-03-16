import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StickyCalButton from "@/components/StickyCalButton";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Newsletter />
      <Footer />
      <StickyCalButton />
    </main>
  );
};

export default Index;
