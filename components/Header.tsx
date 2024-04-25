"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="py-5 px-[5%] top-0 z-20 flex items-center justify-between special-font bg">
            <Link href='/'>
                <Image src="/logo.svg" alt="logo" width={80} height={80}/>
            </Link>
            <section className={`${isMenuOpen ? 'left-0' : 'left-[-100%]'} nav-transition md:transition-none absolute top-[68px] md:top-0 md:left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-base bg-amber-500 md:bg-transparent pl-[5%] md:pl-auto py-10 md:py-0 w-full md:w-auto`}>
                <div className="p-2 flex flex-col items-center md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8">
                    <a href="javascript:void(0)" className="py-4  md:py-1  hover:text-gray-500 transition delay-200 cursor-pointer" onClick={toggleMenu}>Destinations</a>
                    <a href="javascript:void(0)" className="py-4  md:py-1  hover:text-gray-500 transition delay-200 cursor-pointer" onClick={toggleMenu}>Hotels</a>
                    <a href="javascript:void(0)" className="py-4  md:py-1  hover:text-gray-500 transition delay-200 cursor-pointer" onClick={toggleMenu}>Flights</a>
                    <a href="javascript:void(0)" className="py-4  md:py-1  hover:text-gray-500 transition delay-200 cursor-pointer" onClick={toggleMenu}>Bookings</a>
                    <a href="javascript:void(0)" className="py-4  md:py-1  hover:text-gray-500 transition delay-200 cursor-pointer" onClick={toggleMenu}>Logins</a>
                    <a href="javascript:void(0)" className=" hover:text-gray-500 transition delay-200 cursor-pointer border border-black px-4 py-1 rounded-[4px]" onClick={toggleMenu}><button className="border-none">Sign up</button></a>
                    <a href="javascript:void(0)" className="py-4  md:py-1  hover:text-gray-500 transition delay-200 cursor-pointer" onClick={toggleMenu}>EN</a>
                </div>
            </section>
            
            {isMenuOpen ? 
            <IoClose className="block md:hidden text-4xl text-amber-500 font-bold cursor-pointer" onClick={toggleMenu}/>
            :
            <IoMenu className="block md:hidden text-4xl text-amber-500 font-bold cursor-pointer" onClick={toggleMenu}/>
            }

        </nav>
    )
}

export default Header
