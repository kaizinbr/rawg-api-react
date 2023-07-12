"use client";
import { IoSearch, IoChevronDown } from 'react-icons/io5'
import { BiPlus } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './Controls';
import SearchBar from './Search';

export default function Navbar() {

    return (
        <nav className={`
            flex flex-row items-center justify-between
            h-16 w-[calc(100%-80px)] mx-10 my-4 px-8
            bg-neutral-800/70  rounded-full
            fixed top-0 left-0 z-50 backdrop-blur-2xl
        `}>
            <div className={`
                flex flex-row items-center justify-center   
            `}>
                <h1 className={`
                    text-2xl font-bold
                `}>dots</h1>
            </div>            

            <div className={`
                flex flex-row items-center justify-center
            `}>
                <SearchBar />
            </div>


            <div className={`
                flex flex-row items-center justify-center
                gap-2
                p-2 rounded-md hover:bg-neutral-700 transition-all
            `}>
                <span>
                    <IoChevronDown />
                </span>
                <div className={`
                    h-8 w-8 rounded-full bg-neutral-200
                `}>
                    <Image src="/pfp.jpeg" alt="profile pic" width={32} height={32} className={`
                        h-full w-full rounded-full
                    `} />
                </div>
            </div>
        </nav>

    )

}