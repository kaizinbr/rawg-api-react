import { IoSearch, IoChevronDown } from 'react-icons/io5'
import { BiPlus } from "react-icons/bi";
import Link from 'next/link';
import NavLinks from './Controls';

export default function Navbar() {

    return (
        <nav className={`
            flex flex-row items-center justify-between
            h-16 w-[calc(100%-80px)] mx-10 my-4 px-8
            bg-neutral-800/70 backdrop-blur-3xl rounded-full
            fixed top-0 left-0 z-50
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
                <input type="search" name="search" id="search" autoComplete="off" className={`
                    h-8 w-64 px-4 py-2
                    bg-neutral-800 rounded-md outline-none
                    border border-neutral-700 hover:border-neutral-500 transition-all 
                `} />
                <button className={`
                    h-8 w-8 ml-2 transition-all
                `}>
                    <IoSearch className={`
                        h-6 w-6 text-neutral-100
                    `} />
                </button>

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

                </div>
            </div>
        </nav>

    )

}