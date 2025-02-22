import { LuArrowUpRight } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="w-full md:h-fit min-h-screen pt-28 flex flex-col items-end lg:justify-end justify-start px-10" id="about">
        <img src="hero-img.png" alt="hero-bg-img" className="lg:absolute flex md:w-[700px] w-[300px] h-auto left-[200px] top-[100px] z-0 hover:scale-[1.2] transition-all ease-in-out duration-300"></img>
      <div className="flex items-center justify-center md:gap-20 gap-14 md:mb-32 mb-20 z-10">
        <div className="flex flex-col items-end justify-end font-bold">
            <span className="md:text-6xl text-2xl flex gap-0 items-start"><FaPlus className="text-lg text-purple-600"/>28</span>
            <span className="md:text-xl text-sm">SUCCESS</span>
            <span className="md:text-xl text-sm">PROJECT</span>
        </div>
        <div className="flex flex-col items-end justify-end font-bold">
            <span className="md:text-6xl text-2xl flex gap-0 items-start"><FaPlus className="text-lg text-purple-600"/>7</span>
            <span className="md:text-xl text-sm">PRODUCT</span>
            <span className="md:text-xl text-sm">LAUNCHES</span>
        </div>
        <div className="flex flex-col items-end justify-end font-bold">
            <span className="md:text-6xl text-2xl flex gap-0 items-start"><FaPlus className="text-lg text-purple-600"/>2</span>
            <span className="md:text-xl text-sm">STARTUP</span>
            <span className="md:text-xl text-sm">RAISED</span>
        </div>
      </div>
      <div className="mb-5 z-10 group">
        <Link href="mailto:synkdigital0@gmail.com?subject=Enquiry for a Project" className="lg:text-4xl text-3xl font-thin gap-2 flex items-center">
            REACH OUT <LuArrowUpRight className="text-purple-600 lg:text-6xl text-4xl group-hover:rotate-45 transition-all ease-in-out duration-200"/>
        </Link>
      </div>
      <div className="flex flex-col items-end justify-end md:text-9xl text-6xl font-semibold tracking-tight leading-none z-10">
        <span>LIMITLESS</span>
        <span>BUSINESS</span>
        <span>SOLUTIONS</span>
      </div>
      <div className="absolute top-[40%] left-[50px] border-l-4 border-purple-600 pl-2 md:flex hidden">
        <span className="uppercase font-bold leading-none text-left flex text-xl">
            unleashing<br />boundless creativity<br />for your brand
        </span>
      </div>
      <div className="absolute left-[100px] bottom-[100px] border-r-4 border-purple-600 pr-2 md:flex hidden">
        <span className="uppercase font-bold leading-none text-right flex text-xl">
            visionary designers<br />to transform<br />your ideas
        </span>
      </div>
    </div>
  )
}

export default HeroSection
