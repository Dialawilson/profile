import Link from "next/link";
import Image from "next/image";
import Ogonisubmit from "@/asset/img/ogonisubmit.png";
import work1 from "@/asset/img/work2.png";

const Project = () => {
  const projects = [
    { 
      img: Ogonisubmit, 
      alt: "Ogoni submit Project", 
      tools: "REACT TAILWIND SHEETDB", 
      title: "Ogoni Enterpreneurship Summit", 
      detail: "An Event postfolio and regesteration site.",
      href:"#" ,
      linkinfo:"live"
    },
    { 
      img: work1, 
      alt: "ProtectX Project", 
      tools: "REACT NEXT.JS TAILWIND", 
      title: "ProtectX", 
      detail: "Discord bot for server protection and moderation." 
    },
    { 
      img: work1, 
      alt: "Kahoot Clone", 
      tools: "VUE NODE.JS SOCKET.IO", 
      title: "Kahoot Clone", 
      detail: "Real-time multiplayer quiz platform for students." 
    },
  ];

  return (
    <section className="px-6 md:px-24 py-16 bg-[#282C33] font-mono">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4 w-full">
          <h3 className="text-3xl font-medium text-white">
            <span className="text-[#C778DD]">#</span>projects
          </h3>
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[300px] hidden md:block"></div>
        </div>
        <Link 
          href="/project" 
          className="text-white hover:text-[#C778DD] transition-colors whitespace-nowrap"
        >
          View all <span className="tracking-tighter">~~&gt;</span>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#ABB2BF] flex flex-col group hover:border-white transition-colors duration-300">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
              <Image 
                src={project.img} 
                alt={project.alt} 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Tools Header */}
            <div className="p-2 border-y border-[#ABB2BF] text-[#ABB2BF] text-sm uppercase tracking-wider">
              {project.tools}
            </div>

            {/* Content Body */}
            <div className="p-4 flex flex-col flex-grow">
              <h4 className="text-2xl text-white font-medium mb-4">{project.title}</h4>
              <p className="text-[#ABB2BF] mb-6 flex-grow">{project.detail}</p>
              
              <div className="flex gap-4">
                <Link alt={project.alt} href={project.href || "#"} className="border border-[#C778DD] text-white px-4 py-2 hover:bg-[#C778DD]/20 transition-all">
                  {project.linkinfo} <span className="text-sm">{"<~>"}</span>
                </Link>
                {/* Optional: Add a Cached/Github button for extra professionalism */}
                <button className="border border-[#ABB2BF] text-[#ABB2BF] px-4 py-2 hover:bg-[#ABB2BF]/10 transition-all">
                  Cached
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;