import Image from "next/image";
import Link from "next/link";
import Ogonisubmit from "@/asset/img/ogonisubmit.png";
import Coodeck from "@/asset/img/coodeck.png";
import HogoBoss from "@/asset/img/hogoboss.png";
import Oly from "@/asset/img/oly.png"


export default function Works() {
  const completedApps = [
   { 
         img: Ogonisubmit, 
         alt: "Ogoni submit Project", 
         tools: "REACT TAILWIND SHEETDB", 
         title: "Ogoni Enterpreneurship Summit", 
         detail: "An Event postfolio and regesteration site.",
         href:"https://www.ogonisummit.com/" ,
         linkinfo:"live"
       },
       { 
         img: Coodeck, 
         alt: "Coodeck Project", 
         tools: "REACT NEXT.JS TAILWIND POSTGRESS", 
         title: "Coodeck", 
         detail: "Coodeck is now know as anthena is AI-matched talent and seamless project execution.", 
         href:"https://www.useanthena.com/",
         linkinfo:"live"
   
       },
       { 
         img: HogoBoss, 
         alt: "HogoBoss portfolio", 
         tools: "REACT TAILWIND", 
         title: "HogoBoss", 
         detail: "A basic portfolio site",
         href:"https://dialawilson.github.io/HUGOBOSS/",
         linkinfo:"live"
       },
       { 
         img: Oly, 
         alt: "ecommers", 
         tools: "REACT TAILWIND", 
         title: "Oly  Ecommerce", 
         detail: "A ecommerce site for tiktoc vendors.",
         href:"https://dialawilson.github.io/HUGOBOSS/",
         linkinfo:"live"
       },
  ];

  const smallProjects = [
    { 
      title: "Task Manager", 
      skills: "PYTHON FLET", 
      detail: "A simple task manager using python and flet for UI.",
      href: "/works" 
    },
    { 
      title: "Profile v1", 
      skills: "TAILWIND NEXT.JS", 
      detail: "My very first portfolio website.",
      href: "/" 
    },
    { 
      title: "Task Manager", 
      skills: "React LocalStorage", 
      detail: "Offline task tracker with drag-and-drop.",
      href: "/works" 
    },
  ];

  return (
    <section className="px-6 md:px-24 py-16 font-mono bg-[#282C33] text-[#ABB2BF]">
      {/* Page Title Header */}
      <div className="mb-16">
        <h2 className="text-4xl text-white font-semibold mb-2">
          <span className="text-[#C778DD]">/</span>projects
        </h2>
        <p className="text-white">List of my projects</p>
      </div>

      {/* Section 1: Completed Apps */}
      <div className="mb-20">
        <h3 className="text-3xl mb-8 text-white font-medium">
          <span className="text-[#C778DD]">#</span>completed-apps
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedApps.map((wks, index) => (
            <div key={index} className="border border-[#ABB2BF] flex flex-col group hover:border-white transition-colors duration-300">
              <div className="relative aspect-video overflow-hidden border-b border-[#ABB2BF]">
                <Image src={wks.img} alt={wks.alt} className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-2 border-b border-[#ABB2BF] text-sm uppercase tracking-wider">
                {wks.tools}
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="text-2xl text-white font-medium mb-4">{wks.title}</h4>
                <p className="mb-6 flex-grow">{wks.detail}</p>
                <div className="flex gap-4">
                  <Link href={wks.href} className="border border-[#C778DD] text-white px-4 py-2 hover:bg-[#C778DD]/20 transition-all">
                    {wks.linkinfo} {"<~>"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Small Projects */}
      <div>
        <h3 className="text-3xl mb-8 text-white font-medium">
          <span className="text-[#C778DD]">#</span>small-projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {smallProjects.map((proj, index) => (
            <div key={index} className="border border-[#ABB2BF] p-4 flex flex-col hover:bg-[#ABB2BF]/5 transition-colors">
              <div className="text-sm border-b border-[#ABB2BF] pb-2 mb-4">
                {proj.skills}
              </div>
              <h4 className="text-xl text-white font-medium mb-2">{proj.title}</h4>
              <p className="text-sm mb-6 flex-grow">{proj.detail}</p>
              <Link href={proj.href}>
                <button className="border border-[#C778DD] text-white px-4 py-1.5 text-sm hover:bg-[#C778DD]/20 transition-all">
                  Github {"<~>"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}