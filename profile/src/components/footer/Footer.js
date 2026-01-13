import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Contact from "../Contact/Contact";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <div>

      <Contact/>
    </div>
    <footer className="px-6 md:px-24 py-12 font-mono bg-[#282C33] border-t border-[#ABB2BF]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h3 className="text-white font-medium text-lg">
                <span className="text-[#C778DD]">{"#"}</span> WilsonDiala
              </h3>
              <span className="text-[#ABB2BF] text-sm italic">diala.i.wilson@gmail.com</span>
            </div>
            <p className="text-[#ABB2BF] text-sm">
              Mobile developer and front-end engineer based in Nigeria.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-xl">Media</h3>
            <div className="flex items-center gap-4 text-[#ABB2BF]">
              <Link href="https://github.com" target="_blank" className="hover:text-white transition-colors">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">
                <Twitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center pt-8 border-t border-[#ABB2BF]/10">
          <p className="text-[#ABB2BF] text-xs tracking-widest">
            © Copyright {currentYear}. Designed and Developed by <span className="text-white">Wilson</span>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;