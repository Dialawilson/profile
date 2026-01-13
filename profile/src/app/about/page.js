import Image from "next/image"
import profileImg from "@/asset/img/wilsonProfile.png"
import Skills from "@/components/Skills/skills"

export default function About() {
    const funFacts = [
        "I like summer more than winter",
        "I am a die hard Arsenal fan",
        "I am a game lover",
        "I love anything that makes the brain work",
        "I prefer dark mode over light mode",
        "I often listen to lo-fi while coding",
        "I enjoy solving Rubik's cubes"
    ];

    return (
        <>
        <section className="px-6 py-16 md:px-24 font-mono bg-[#282C33] text-[#ABB2BF]">
            {/* Page Title Header */}
            <div className="mb-16">
                <h2 className="text-4xl text-white font-semibold mb-2">
                    <span className="text-[#C778DD]">/</span>about-me
                </h2>
                <p className="text-white">Who am I?</p>
            </div>

            {/* Introduction Section */}
            <div className="flex mb-24 flex-col md:flex-row items-center gap-16">
                <div className="flex-1 leading-relaxed">
                    <p className="mb-6 text-lg text-white font-medium">Hello, I’m Wilson!</p>
                    <p className="mb-6">
                        I’m a versatile <span className="text-white">Mobile and Front-end Developer</span>. 
                        I specialize in architecting responsive websites and high-performance mobile applications 
                        that prioritize modern user experiences.
                    </p>
                    <p className="mb-8">
                        Transforming creativity into functional code has been my passion for over 2 years. 
                        Whether it’s building from scratch or optimizing existing platforms, I strive to 
                        leverage the latest technologies like <span className="text-[#C778DD]">React</span> and 
                        <span className="text-[#C778DD]"> Flutter</span> to help clients establish a 
                        powerful digital presence.
                    </p>
                </div>

                {/* Profile Image */}
                <div className="flex-1 relative group">
                    <div className="relative z-10 border-b-2 border-[#C778DD]">
                        <Image 
                            src={profileImg} 
                            alt="Wilson Profile" 
                            priority
                            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="absolute top-4 right-4 w-full h-full border border-[#ABB2BF] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                </div>
            </div>

            {/* Skills Section (Imported Component) */}
            

            {/* Fun Facts Section */}
            <div className="mb-12">
                <div className="flex items-center gap-4 w-full mb-8">
                    <h3 className="text-3xl text-white font-medium">
                        <span className="text-[#C778DD]">#</span>my-fun-facts
                    </h3>
                    <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[300px]"></div>
                </div>

                <div className="flex flex-wrap gap-4">
                    {funFacts.map((fact, index) => (
                        <div 
                            key={index} 
                            className="border border-[#ABB2BF] p-2 hover:bg-[#ABB2BF]/5 transition-colors"
                        >
                            <span className="text-[#ABB2BF]">{fact}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <div className="mb-24">
                <Skills />
            </div>
        </>
    )
}