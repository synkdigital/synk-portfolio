import Link from "next/link"
import { FaGithub, FaInstagram, FaLaptop, FaLinkedin, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="p-4 bg-gray-300 w-full lg:h-[500px] h-[400px]" id="contactus">
        <div className="flex bg-white flex-col justify-between h-full p-4 rounded-2xl">
            <h1 className="uppercasse self-end text-right lg:text-lg text-sm uppercase font-bold lg:w-[20%] w-full z-10">
                let&apos;s collaborate and create something extraordinary. contact us today to explore limitless solutions tailored to your vision.
            </h1>
            <img src="footer-img.png" alt="footerimg" className="lg:w-[350px] w-[250px] h-auto absolute z-0" />
            <h1 className="lg:text-[160px] text-4xl font-bold z-10 lg:mt-0 mt-10">
                REACH OUT NOW.
            </h1>
            <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-5 z-10 mt-10">
                <div className="flex items-center justify-center gap-5">
                    <Link href="https://github.com/synkdigital" target="_blank">
                        <FaGithub className="lg:text-4xl text-3xl text-black"/>
                    </Link>
                    <Link href='https://www.instagram.com/synk.digital_' target="_blank">
                        <FaInstagram className="lg:text-4xl text-3xl text-black"/>
                    </Link>
                    <Link href='/'>
                        <FaLinkedin className="lg:text-4xl text-3xl text-black"/>
                    </Link>
                </div>
                <div className="flex lg:items-start items-center justify-start flex-col font-bold text-lg text-left">
                    <span className="flex items-center gap-1">
                        <FaPhone className="lg:text-xl text-sm"/>
                        +91 7352949328
                    </span>
                    <span className="flex items-center gap-1">
                        <FaLaptop className="lg:text-xl text-sm"/>
                        synkdigital0@gmail.com
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
