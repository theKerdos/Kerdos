'use client'
import About from "@/components/About";
import HorizontalSlider from "@/components/HorizontalSlider";
import { Merriweather, Protest_Guerrilla, Prata, Roboto, GFS_Didot } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import lockOrientation from '../utils/lockOrientation';
import { useEffect } from "react";


const merriweather = GFS_Didot({ 
  weight: ["400"],  // Use single or double quotes consistently
  subsets: ['greek']
});

export default function Home() {

  useEffect(() => {
    lockOrientation();
  }, []);

  return (
    <div className="items-center justify-center">
      <div className='flex items-center pr-4 pl-4 justify-between lg:justify-between mt-7 lg:pr-8 lg:pl-8'>
    <div className={`${merriweather.className} text-3xl text-center lg:text-start tracking-extra-wide flex flex-row items-center`}>
      <div className="hidden lg:block">KERDOS</div>
      <Image src='/kerdoslogo.png' alt='logo' width={80} height={80} />
    </div>
    <Link href="https://cal.com/thekerdos">
    <button className="bg-white text-black rounded-[10px] p-3 font-medium transition-all active:bg-slate-400 active:transition-all">Book a call</button>
    </Link>
    </div>
    <div className="flex justify-center text-center items-start">
      <div className="lg:w-8/12 pl-0 pr-0 text-center justify-center m-auto mt-8 md:pl-1 md:pr-1 items-center text-[22px] w-11/12 text-neutral-300 font-normal">ENGINEERING POWERFUL DIGITAL EMPIRES WHERE EVERY LINE OF CODE DRIVES DOMINANCE, WEALTH AND AUTHORITY</div>
    </div>

    <div className="flex justify-center text-center">
      <div className="text-[16px] lg:w-30 sm:mt-6 mt-3 font-light items-center text-zinc-400">
      HELPING STARTUPS AND ONLINE BUSINESSES BUILD THEIR FOUNDATION⬇️</div>
    </div>
    <HorizontalSlider/>
    <About/>
    </div>
  );
}