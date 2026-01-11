import Image from "next/image";
import Link from "next/link";
import profileImg from "@/asset/img/wilsonProfile.png";

const About = () => {
  return (
    <section className="px-6 md:px-24 py-16 font-mono bg-[#282C33]">
      {/* Section Header */}
      <div className="flex items-center gap-4 w-full mb-12">
        <h3 className="text-3xl text-white font-medium">
          <span className="text-[#C778DD]">#</span>about-me
        </h3>
        <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[300px]"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Left: Text Content */}
        <div className="flex-1 text-[#ABB2BF] leading-relaxed">
          <p className="mb-6 text-lg">Hello, I’m Wilson!</p>

          <p className="mb-6">
            I’m a versatile <span className="text-white">Mobile and Front-end Developer</span>. 
            I specialize in architecting responsive websites and high-performance mobile applications 
            that prioritize modern user experiences.
          </p>

          <p className="mb-8">
            Transforming creativity into functional code has been my passion for over 2 years. 
            Whether it`s building from scratch or optimizing existing platforms, I strive to 
            leverage the latest technologies like <span className="text-[#C778DD]">React</span> and 
            <span className="text-[#C778DD]"> Flutter</span> to help clients establish a 
            powerful digital presence.
          </p>

          <Link href="/about">
            <button className="border border-[#C778DD] text-white font-medium px-6 py-3 hover:bg-[#C778DD]/20 transition-all duration-300">
              Read More <span className="ml-2">{"->"}</span>
            </button>
          </Link>
        </div>

        {/* Right: Profile Image with Decorative Border */}
        <div className="flex-1 relative group">
          <div className="relative z-10 border-b-2 border-[#C778DD]">
            <Image 
              src={profileImg} 
              alt="Wilson Profile" 
              priority
              className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Decorative background element - common in developer portfolios */}
          <div className="absolute top-4 right-4 w-full h-full border border-[#ABB2BF] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;