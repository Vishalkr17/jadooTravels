import Image from "next/image";
import Link from "next/link";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
  return (
  <main className="relative w-full flex flex-col md:flex-row items-center justify-between py-5 px-[5%] bg ">
    <section className="top-0 flex z-10">
        <div className="w-full md:w-1/2">
          <p className="px-2 py-4 text-red-500 font-bold text-lg special-font">BEST DESTINATIONS AROUND THE WORLD</p>
          <h1 className="p-4 text-4xl md:text-5xl xl:text-6xl text-blue-950 font-extrabold w-full md:w-[80%] text-center md:text-left" data-aos="fade-up">
            <span className="inline-block">Travel,</span>
            <span className="relative inline-block">
              enjoy
              <Image src="/shape.svg" alt="underline" height={100} width={100} className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            </span>
            <span className="inline-block">and live a </span>
            <br/>
            <span className="inline-block">new</span>
            <span className="inline-block"> and fulfill life</span>
          </h1>
          <p className="pb-2 m-2 text-base text-gray-500 w-full lg:w-[80%] xl:w-[65%] text-center md:text-left special-font" data-aos="fade-up">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the</p>
          <div className="flex special-font space-x-10" data-aos="fade-up">
                <a href="javascript:void(0)" className="py-3 px-5 rounded-lg bg-amber-500 text-white text-lg font-bold shadow-lg shadow-amber-300">Find Out More</a>
                <Link href="/" className="flex items-center text-gray-500 text-lg font-medium gap-4 transition delay-200">
                    <IoIosPlay className="text-5xl text-white p-4 rounded-full bg-red-600 shadow-lg shadow-red-500 " />
                    <span>Play Demo</span>
                </Link>
            </div>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left " data-aos="fade-left">
          <Image src="/hero-img.png" alt="image" height={500} width={500} />
        </div>
      </section>
    </main>
  );
};

export default Hero;
