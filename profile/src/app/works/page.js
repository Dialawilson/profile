import Image from "next/image";
import Link from "next/link";
// Ensure these paths match your folder structure exactly
import work1 from "@/asset/img/work2.png";
import work2 from "@/asset/img/work3.png";

export default function Works() {
  const completedApps = [
    { 
      img: work1, 
      alt: "ChertNodes Project", 
      tools: "HTML CSS PYTHON", 
      title: "ChertNodes", 
      detail: "Minecraft servers hosting service with high performance." 
    },
    { 
      img: work2, 
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
    }
  ];

  const smallProjects = [
    { 
      title: "Discord Bot", 
      skills: "JS Node.js Discord.js", 
      detail: "A simple bot for managing server roles.",
      href: "/works" 
    },
    { 
      title: "Portfolio v1", 
      skills: "HTML CSS JS", 
      detail: "My very first portfolio website.",
      href: "/works" 
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
                  <button className="border border-[#C778DD] text-white px-4 py-2 hover:bg-[#C778DD]/20 transition-all">
                    Live {"<~>"}
                  </button>
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