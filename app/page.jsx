import Navbar from "@/components/fragments/Navbar";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-start p-0 m-0">
      <Navbar/>
      <HeroSection/>
      <Services/>
      {/* <div className="p-3 w-full bg-gray-300">
        <Projects/>
      </div>
      <Footer/> */}
    </div>
  );
}
