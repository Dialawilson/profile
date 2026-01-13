import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/skills";

export default function Home() {
  return (
    <>
    <main >
      <Hero/>
      {/* Hero section */}
      <Project/>
      {/* project Section */}
      <Skills/>
      {/* skills Section */}
      <About/>
      {/* about section */}
     
    </main>
    </>
  );
}
