import { Mail, Phone } from "lucide-react"; // Optional: Use an icon library like lucide-react

const Contact = () => {
  return (
    <section id="#contacts" className="text-[#ABB2BF] font-mono py-16 px-6 md:px-24 bg-[#282C33]">
      {/* Section Header */}
      <div className="flex items-center gap-4 w-full mb-12">
        <h3 className="text-3xl text-white font-medium">
          <span className="text-[#C778DD]">#</span>contact
        </h3>
        <div className="h-[1px] bg-[#C778DD] flex-grow max-w-[300px]"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Left Side: Text */}
        <div className="max-w-md">
          <p className="leading-relaxed text-lg">
            I’m interested in freelance opportunities. However, if you have other requests or questions, don’t hesitate to contact me.
          </p>
        </div>

        {/* Right Side: Contact Box */}
        <div className="border border-[#ABB2BF] p-4 min-w-[300px] self-start bg-[#282C33]">
          <h3 className="text-white font-semibold mb-4">Message me(click) here </h3>
          
          <div className="space-y-4">
            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/2349032368266" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <span className="text-[#C778DD] text-xl group-hover:scale-110 transition-transform">☏</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-[#C778DD]">WhatsApp</span>
                <p className="text-sm">+234 903 2368 266</p>
              </div>
            </a>

            {/* Email Link */}
            <a 
              href="mailto:Diala.i.wilson@gmail.com" 
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <span className="text-[#C778DD] text-xl group-hover:scale-110 transition-transform">✉</span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase text-[#C778DD]">Email</span>
                <p className="text-sm">Diala.i.wilson@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;