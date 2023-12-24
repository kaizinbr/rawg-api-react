"use client";
import { IoSearch, IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import SearchBar from "./Search";
import ProfilePic from "./ProfilePic";
import { useState, useEffect, useRef } from "react";
import {
    useAnimate,
    stagger,
    motion,
    useScroll,
    useMotionValueEvent,
    AnimatePresence
} from "framer-motion";
import { BiHomeCircle, BiGame, BiHash, BiPlus } from "react-icons/bi";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        // animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

        animate(
            "ul",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)",
                display: isOpen ? "flex" : "none",
                
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5,
            }
        );

        animate(
            "li",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0,
            }
        );
    }, [animate, isOpen]);

    return scope;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", async (latest) => {
        await (async () => {
            isOpen ? handleMenuOpen() : null;
            // setIsScrolling(true);
            // scope.current.style.opacity = `.7`;
        })();
    });

    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
        // scope.current.setAttribute("style", "opacity: 1");
    };

    const [isMobile, setIsMobile] = useState(false);
    // setIsMobile(window.innerWidth < 800);

    useEffect(() => {
        setIsMobile(window.innerWidth < 800);
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth < 800);
        });
    }, []);
    return (
        <nav
            className={` NavBar
                flex flex-row items-start justify-between
                h-16 min-[800px]:w-[calc(100%-80px)] min-[800px]:mx-10 min-[800px]:my-4 px-6
                bg-neutral-800/80  min-[800px]:rounded-full border 
                min-[800px]:border-b-[1px] min-[800px]:border-neutral-600/20
                fixed top-0 left-0 z-50 backdrop-blur-2xl
                min-[1536px]:mx-auto min-[1536px]:left-auto min-[1536px]:relative max-w-[1536px]

                w-full mx-0 my-0 rounded-none border-t-0 border-x-0 border-b-2 border-neutral-600/20
                transition-all duration-300 ease-in-out
            `}
            id="NavBar"
        >
            <div
                className={`
                flex flex-row items-start justify-center
                gap-4 
                z-10
            `}
            >
                <div
                    className={`
                    flex flex-row h-16 items-center justify-center
                    order-1
                `}
                >
                    <Link
                        className={`
                        text-2xl font-bold text-neutral-100 hover:text-emerald-300
                        transition-all duration-300 ease-in-out
                    `}
                        href="/"
                    >
                        :atic
                    </Link>
                </div>

                <div
                    className={`
                        menu gap-1 flex flex-col 
                        order-2
                        z-10
                    `}
                    ref={scope}
                >
                    <div className="h-16 flex items-center justify-start">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                handleMenuOpen();
                            }}
                            className={`
                                flex flex-row items-center justify-center
                                h-12 w-12 cursor-pointer
                                rounded-xl group-hover/navbtns:rounded-xl
                                transition-all duration-300 ease-in-out
                                
                                text-2xl hover:text-emerald-300
                            `}
                        >
                            {isOpen ? (
                                <motion.div>
                                    <CgClose className="" />
                                </motion.div>
                            ) : (
                                <CgMenuLeftAlt className="" />
                            )}
                            {/* <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </div> */}
                        </motion.button>
                    </div>
                    
                        <AnimatePresence>
                            <motion.ul
                                style={{
                                    pointerEvents: isOpen ? "auto" : "none",
                                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                                    zIndex: isOpen ? "50" : "-10",
                                }}
                                className={`
                                    flex-col items-center justify-center
                                    rounded-xl w-12
                                    bg-neutral-800 border border-neutral-600/50
                                    backdrop-blur-xl py-4 px-1
                                    gap-3
                                `}>
                                <li
                                    className={`
                                        w-10 h-10 flex justify-center items-center
                                        rounded-full hover:bg-neutral-500/50 hover:text-emerald-300
                                        transition duration-300 cursor-pointer
                                    `}
                                >
                                    <BiPlus className="text-xl" />
                                </li>
                                <li
                                    className={`
                                        w-10 h-10 flex justify-center items-center
                                        rounded-full hover:bg-neutral-500/50 hover:text-emerald-300
                                        transition duration-300 cursor-pointer
                                    `}
                                >
                                    <BiGame className="text-xl" />
                                </li>
                                <li
                                    className={`
                                        w-10 h-10 flex justify-center items-center
                                        rounded-full hover:bg-neutral-500/50 hover:text-emerald-300
                                        transition duration-300 cursor-pointer
                                    `}
                                >
                                    <BiHash className="text-xl" />
                                </li>
                                <li
                                    className={`
                                        w-10 h-10 flex justify-center items-center
                                        rounded-full hover:bg-neutral-500/50 hover:text-emerald-300
                                        transition duration-300 cursor-pointer
                                    `}
                                >
                                    <BiHomeCircle className="text-xl" />
                                </li>
                                {isMobile && (
                                    <li
                                        className={`
                                        w-10 h-10 flex justify-center items-center
                                        rounded-full hover:bg-neutral-500/50 hover:text-emerald-300
                                        transition duration-300 cursor-pointer
                                    `}
                                    >
                                        <IoSearch className="text-xl" />
                                    </li>
                                )}
                            </motion.ul>
                        </AnimatePresence>
                </div>
            </div>

            <div className="h-full flex items-center justify-center order-3">
                <div
                    className={`
                    flex flex-row items-center justify-center
                `}
                >
                    <SearchBar />
                </div>
            </div>

            <div className="h-full flex items-center justify-center order-4">
                <div
                    className={`
                    flex flex-row items-center justify-center
                    gap-2
                    p-2 rounded-xl hover:bg-neutral-700/50 transition-all duration-300 ease-in-out
                    border border-transparent hover:border-neutral-500/20
                `}
                >
                    <span>
                        <IoChevronDown />
                    </span>
                    <ProfilePic />
                </div>
            </div>
        </nav>
    );
}
