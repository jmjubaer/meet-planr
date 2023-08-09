"use client"
import Container from "@/components/container";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars,FaTimes } from 'react-icons/fa';
/*
Requirements
*1. must be Tailwind
 2. paste this code in index.css 

.jm_nav{
    @apply block lg:flex justify-between lg:col-span-3 items-center absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-screen lg:h-auto duration-500 bg-[#fff] lg:bg-[transparent] lg:p-0 z-50
  }
  3. use react icons or if you want to use any icons replaced the bar icon and times icon in line of 33.
*/



const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <div>
                <nav className='flex lg:grid lg:grid-cols-5 justify-between items-center py-6 px-4 border-b-2  border-s-black '>
                    <h1 className='text-4xl font-bold text-[#465AF7]  text-blue-e lg:col-span-2 jm-shadow mx-2'><Link href="/">MeetPlanr</Link></h1>

                    <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                        <ul className='flex font-bold flex-col lg:flex-row gap-3 lg:gap-x-7'>
                            <li><Link href="/" className={({ isActive }) => isActive ? "text-blue-e" : "" }>Product</Link></li>
                            <li><Link className={({ isActive }) => isActive ? "text-blue-e" : "" } href="/statistics">Solutions</Link></li>
                            <li><Link className={({ isActive }) => isActive ? "text-blue-e" : "" } href="/applied">Pricing</Link></li>
                            <li><Link className={({ isActive }) => isActive ? "text-blue-e" : "" } href="/blogs">Blog</Link></li>
                        </ul>
                        <button className='btn bg-[#465AF7] text-white mx-2 px-6 mt-10 lg:mt-0'>Login</button>
                    </div>
                    <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <FaTimes/> : <FaBars/>}</button>
                </nav>
            </div>
        </Container>
    );
};

export default Navbar;
