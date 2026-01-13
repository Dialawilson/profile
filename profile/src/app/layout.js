import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const FiraCode = Fira_Code({
  variable: "--font-fira-code",
  display: 'swap',
  subsets: ["latin"],
});



export const metadata = {
  title: "wilson",
  description: "Wilson is a Mobile & Frontend developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${FiraCode.variable}antialiased `}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
