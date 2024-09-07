
import About from "@/components/About";
import HorizontalSlider from "@/components/HorizontalSlider";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const merriweather = Merriweather({ 
  weight: ["700"],  // Use single or double quotes consistently
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className="items-center justify-center">
      <div className='flex items-center pr-4 pl-4 justify-between lg:justify-between mt-7 lg:pr-8 lg:pl-8'>
    <div className={`${merriweather.className} text-3xl text-center lg:text-start tracking-extra-wide flex flex-row items-center`}>
      <div className="hidden lg:block">KERDOS</div>
      <Image src='/kerdoslogo.png' alt='logo' width={80} height={80} />
    </div>
    <Link href="https://cal.com/thekerdos">
    <button className="bg-white text-black rounded-[10px] p-3 font-semibold transition-all active:bg-slate-400 active:transition-all">Book a call</button>
    </Link>
    </div>

    <div className="flex justify-center text-center">
      <div className="lg:w-8/12 text-center justify-center m-auto mt-8  items-center text-2xl w-11/12 text-zinc-100 font-medium">BUILDING POWERFUL, CUTTING-EDGE WEBSITES THAT COMMAND ATTENTION. ELEVATING YOUR BRAND WITH UNMATCHED WEB MASTERY. DOMINATE DIGITALLY.</div>
    </div>

    <div className="flex justify-center text-center ">
      <div className="text-1xl lg:w-30 mt-4 font-light text-zinc-100">
      HELPING STARTUPS AND ONLINE BUSINESS BUILD THEIR FOUNDATION⬇️</div>
    </div>
    <HorizontalSlider/>
    <About/>
    </div>
  );
}