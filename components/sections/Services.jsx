import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
const Services = () => {
    const domains = [
        {
            title:'Web Development',
            desc:'Scalable, high-performance websites tailored for your business.',
            url:'mailto:synkdigital0@gmail.com?subject=Enquiry for a web development project'
        },
        {
            title:'App Development',
            desc:'Sleek, user-friendly mobile & web apps with top-tier UX.',
            url:'mailto:synkdigital0@gmail.com?subject=Enquiry for an app development project'
        },
        {
            title:'Digital Business Solutions',
            desc:'Smart tools like digital menus & schedulers to streamline operations.',
            url:'mailto:synkdigital0@gmail.com?subject=Enquiry for a custom business development project'
        },
        {
            title:'AI Solutions',
            desc:'AI-powered automation, chatbots, and intelligent business tools.',
            url:'mailto:synkdigital0@gmail.com?subject=Enquiry for an AI solution project'
        }
    ]
  return (
    <div className="flex items-start justify-start w-full h-fit p-4 bg-gray-300 gap-3 lg:flex-row flex-col" id="service">
        <div className="lg:h-[80vh] h-fit rounded-2xl bg-white text-black pt-4 pr-4 pl-4 lg:w-[50%] w-full flex flex-col items-end justify-start overflow-hidden">
            <h1 className="lg:text-7xl text-5xl font-bold uppercase text-right">explore our<br/>services</h1>
            <img src="ribbon.png" alt="ribbon" className="w-[500px] h-auto self-start overflow-hidden"/>
        </div>
        <div className="lg:w-[50%] w-full h-[80vh] flex flex-col items-start justify-between gap-3">
            {domains.map((domain,index)=>(
                <div className="h-full bg-white w-full p-4 rounded-2xl flex flex-col justify-between hover:bg-purple-600 hover:text-white transition-all duration-200 ease-in-out group" key={index}>
                    <h1 className="text-3xl font-bold uppercase self-start">{domain.title}</h1>
                    <p className="self-end uppercase font-thin text-sm text-right lg:w-[50%] w-full flex items-center">
                        {domain.desc}
                        <Link href={domain.url}>
                            <LuArrowUpRight className="text-purple-600 text-6xl group-hover:text-white"/>
                        </Link>
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services
