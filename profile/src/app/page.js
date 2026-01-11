import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/footer/Footer";
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
      <Contact/>
      {/* contact section  */}
      <Footer/>
    </main>
    </>
  );
}
