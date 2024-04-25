import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <main className="px-[5%] py-10 bg-white special-font">
            <section>
                <div className="flex justify-between flex-wrap gap-2" >
                    <div className="flex flex-col gap-2 mb-5 md:mb-0 w-full md:w-auto items-center md:items-start justify-center md:justify-start">
                        <Image src="/logo2.svg" width={100} height={100} alt="logo" />
                        <p className="py-6 text-sm text-gray-400 font-medium w-full md:max-w-[200px] text-center md:text-left">Book your trip in minute, get full Control for much longer. </p>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text[18px] text-gray-700 font-extrabold">Company</h1>

                        <div className="text-md text-gray-600 font-medium flex flex-col gap-2">
                            <a href="" className="hover:text-orange transition delay-200">About</a>
                            <a href="" className="hover:text-orange transition delay-200">Careers</a>
                            <a href="" className="hover:text-orange transition delay-200">Mobile</a>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text[18px] text-gray-700 font-extrabold">Contact</h1>

                        <div className="text-md text-gray-600 font-medium flex flex-col gap-2">
                            <a href="" className="hover:text-orange transition delay-200">Help/FAQ</a>
                            <a href="" className="hover:text-orange transition delay-200">Press</a>
                            <a href="" className="hover:text-orange transition delay-200">Affilates</a>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text[18px] text-gray-700 font-extrabold">More</h1>

                        <div className="text-md text-gray-600 font-medium flex flex-col gap-2">
                            <a href="" className="hover:text-orange transition delay-200">Airlinefees</a>
                            <a href="" className="hover:text-orange transition delay-200">Airline</a>
                            <a href="" className="hover:text-orange transition delay-200">Low fare tips</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full md:w-auto mt-5 md:mt-0">
                        <div className="flex items-center gap-4">
                            <FaFacebookF className="text-4xl p-2 text-gray-700 bg-white rounded-full shadow-md cursor-pointer" />
                            <CiInstagram className="text-4xl p-2 text-gray-700 bg-white rounded-full shadow-md cursor-pointer" />
                            <FaTwitter className="text-4xl p-2 text-gray-700 bg-white rounded-full shadow-md cursor-pointer" />
                        </div>

                        <p className="text-[20px] text-gray-500 font-bold">Discover our app</p>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center gap-1 bg-black py-2 px-5 rounded-full cursor-pointer">
                                <Image src="/play-store.png" width={100} height={100} alt="img" />
                            </div>

                            <div className="flex items-center justify-center gap-1 bg-black py-2 px-5 rounded-full cursor-pointer">
                                <Image src="/apple-store.png" width={100} height={100} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-[14px] text-gray-500 text-center font-normal mt-5 ">All rights reserved@jadoo.co</p>
            </section>
        </main>
    );
}

export default Footer;