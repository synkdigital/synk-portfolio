import Link from "next/link"
import { FaGithub, FaInstagram, FaLaptop, FaLinkedin, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="p-4 bg-gray-300 w-full h-fit">
        <div className="flex bg-white flex-col justify-between h-full p-4 rounded-2xl">
            <h1 className="uppercasse self-end text-right text-lg uppercase font-bold w-[40%]">
                let&apos;s collaborate and create something extraordinary. contact us today to explore limitless solutions tailored to your vision.
            </h1>
            <img src="footer-img.png" alt="footerimg" className="w-[350px] h-auto absolute z-0" />
            <h1 className="text-[160px] font-bold z-10">
                REACH OUT NOW.
            </h1>
            <div className="flex item-center justify-center gap-10">
                <Link href="/">
                    <FaGithub className="text-4xl text-black"/>
                </Link>
                <Link href='/'>
                    <FaInstagram className="text-4xl text-black"/>
                </Link>
                <Link href='/'>
                    <FaLinkedin className="text-4xl text-black"/>
                </Link>
                <div className="flex items-start justify-start flex-col font-bold text-lg text-left">
                    <span className="flex items-center gap-1">
                        <FaPhone className="text-xl"/>
                        +91 7352949328
                    </span>
                    <span className="flex items-center gap-1">
                        <FaLaptop className="text-xl"/>
                        synkdigital0@gmail.com
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
