"use client";
import { IoSearch, IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./Search";
import BackButton from "./BackButton";
import { useEffect, useState } from "react";

export default function Navbar() {


    return (
        <nav
            className={` NavBar
            flex flex-row items-center justify-between
            h-16 w-[calc(100%-80px)] mx-10 my-4 px-8
            bg-neutral-800/70  rounded-full border border-neutral-700/10
            fixed top-0 left-0 z-50 backdrop-blur-2xl
        `}
        id="NavBar"
        >
            <div className={`
                flex flex-row items-center justify-center
                gap-4
            `}>
                {/* <div id="arrowBackBtnBox">
                     <BackButton /> 
                </div> */}
                <div
                    className={`
                    flex flex-row items-center justify-center
                `}
                >
                    <Link
                        className={`
                        text-2xl font-bold text-neutral-100 hover:text-red-400
                        transition-all duration-300 ease-in-out
                    `}
                        href="/"
                    >
                        dots
                    </Link>
                </div>
            </div>

            <div
                className={`
                flex flex-row items-center justify-center
            `}
            >
                <SearchBar />
            </div>

            <div
                className={`
                flex flex-row items-center justify-center
                gap-2
                p-2 rounded-md hover:bg-neutral-700 transition-all
            `}
            >
                <span>
                    <IoChevronDown />
                </span>
                <div
                    className={`
                    h-8 w-8 rounded-full bg-neutral-200
                `}
                >
                    <Image
                        src="/pfp.jpeg"
                        alt="profile pic"
                        width={32}
                        height={32}
                        className={`
                        h-full w-full rounded-full
                    `}
                    />
                </div>
            </div>
        </nav>
    );
}
