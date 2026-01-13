import Image from "next/image";
import quoteIcon from "@/asset/img/qt.png";
import profileImg from "@/asset/img/wilsonProfile.png";

const Hero = () => {
  return (
    <section className="bg-[#282C33] text-[#ABB2BF] font-mono py-12 px-6 md:px-24">
      {/* Main Content: Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Wilson is a <span className="text-[#C778DD]">Mobile</span> and <br />
            <span className="text-[#C778DD]">Front-End Developer</span>
          </h1>
          <p className="text-lg md:text-xl max-w-lg leading-relaxed">
            He crafts responsive websites where technologies meet creativity.
          </p>
          {/* <button className="border border-[#C778DD] text-white font-medium px-6 py-3 hover:bg-[#C778DD]/20 transition-all duration-300">
            Contact Me !!
          </button> */}
        </div>

        {/* Right Side: Profile & Status */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative">
            {/* Using Next.js Image component optimized */}
            <Image 
              src={profileImg} 
              alt="Wilson Profile" 
              priority
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            {/* Status Indicator */}
            <div className="flex items-center gap-3 border border-[#ABB2BF] p-2 -mt-\[1px] bg-[#282C33]">
              <div className="w-4 h-4 bg-[#C778DD]" />
              <p className="text-sm">
                Currently working on <span className="text-white">APP</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-24 flex flex-col items-center group">
        <div className="relative">
          {/* Main Quote Box */}
          <div className="border border-[#ABB2BF] p-8 relative">
            <div className="absolute -top-4 left-4 bg-[#282C33] p-2 border border-[#ABB2BF]">
              <Image src={quoteIcon} alt="quote" className="w-4 h-4" />
            </div>
            <p className="text-2xl text-white">Prioritizing Knowledge and Intelligence Leads To Wealth</p>
          </div>
          
          {/* Author Box */}
          <div className="border border-[#ABB2BF] border-t-0 p-4 self-end ml-auto w-fit relative">
             <div className="absolute -top-4 left-4 bg-[#282C33] p-2 border border-[#ABB2BF]">
              <Image src={quoteIcon} alt="quote" className="w-4 h-4" />
            </div>
            <p className="text-xl text-white">- Wilson`s Law</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;