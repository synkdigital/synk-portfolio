import Link from "next/link"
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="fixed w-full flex items-center justify-between px-10 py-4 text-lg bg-white z-50">
      <div>
        <img src="synk2.png" alt="logo" className="w-[150px] h-auto"/>
      </div>
      <div className="lg:flex gap-20 font-bold hidden">
        <Link href="/">
            ABOUT
        </Link>
        <Link href="/">
            SERVICE
        </Link>
        <Link href="/">
            PROJECT
        </Link>
        <Link href="/">
            TESTIMONY
        </Link>
      </div>
      <div className="lg:flex hidden">
        <button className="bg-black px-6 py-2 text-lg font-bold rounded-full text-white">Reach us.</button>
      </div>
      <div className="flex lg:hidden">
        <button>
          <SlMenu className="text-3xl"/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
