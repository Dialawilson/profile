import Image from "next/image";
import skImg from "@/asset/img/skImg.png";

const Skills = () => {
  const skillGroups = [
    { title: "Languages", skills: "JavaScript, TypeScript, Dart, Python" },
    { title: "Databases", skills: "SQLite, MongoDB, PostgreSQL, Firebase" },
    { title: "Tools", skills: "VSCode, Git, Figma, Postman, Linux" },
    { title: "Other", skills: "HTML, CSS, PHP, REST" },
    { title: "Frameworks", skills: "React, Next.js, Flutter, Tailwind, Express" },
    { title: "Softskills", skills: "Teamwork,  Time Management, Accountable, Communication" },
  ];

  return (
    <section className="px-6 md:px-24 py-16 font-mono bg-[#282C33]">
      {/* Section Header */}
      <div className="flex items-center gap-4 w-full mb-12">
        <h3 className="text-3xl text-white font-medium">
          <span className="text-[#C778DD]">#</span>skills
        </h3>
        <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[300px]"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left: Decorative Image */}
        <div className="hidden lg:block w-1/3 opacity-80 hover:opacity-100 transition-opacity">
          <Image src={skImg} alt="Technical shapes decoration" className="w-full h-auto" />
        </div>

        {/* Right: Skills Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className="border border-[#ABB2BF] hover:bg-[#ABB2BF]/5 transition-colors"
            >
              {/* Box Header */}
              <h4 className="border-b border-[#ABB2BF] p-2 text-white font-semibold">
                {group.title}
              </h4>
              {/* Box Content */}
              <p className="p-2 text-[#ABB2BF] leading-relaxed">
                {group.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;