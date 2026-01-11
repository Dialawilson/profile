import Image from "next/image"
import profileImg from "@/asset/img/wilsonProfile.png"
export default function About(){
    return(
        <>
        <section className="px-6 py-16 md:px-24 font-mono text=[#ABB2BF]">
{/* Page Title Header */}
      <div className="mb-16">
        <h2 className="text-4xl text-white font-semibold mb-2">
          <span className="text-[#C778DD]">/</span>about-me
        </h2>
        <p className="text-white">Who i am ?</p>
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
        </>
    )
}