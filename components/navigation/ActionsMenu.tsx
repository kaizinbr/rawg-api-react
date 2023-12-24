"use client";
import "./styles.css";
import { useState, useEffect, useRef } from "react";
import {
    useAnimate,
    stagger,
    motion,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";
import {
    BiHomeCircle,
    BiGame,
    BiHash,
    BiPlus,
    BiMenu,
    BiX,
} from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import ProfilePic from "./ProfilePic";

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

export default function ActionsMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);    
    const [isScrolling, setIsScrolling] = useState(false);

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
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth < 800);
        })
    })
    // const isMobile = window.innerWidth < 800;

    return (
        <div
            className={`
                menu gap-1 flex flex-col 
                
            `}
            ref={scope}
        >
            <div className="h-16 flex items-center justify-start">
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        handleMenuOpen();
                        setIsOpen(!isOpen);
                    }}
                    className={`
                        flex flex-row items-center justify-center
                        h-12 w-12 cursor-pointer
                        rounded-xl group-hover/navbtns:rounded-xl
                        hover:bg-neutral-700/50 transition-all duration-300 ease-in-out
                        border border-transparent hover:border-neutral-500/20
                    `}
                >
                    {isOpen ? (
                        <motion.div>
                            <CgClose className="text-2xl" />
                        </motion.div>
                    ) : (
                        <CgMenuLeftAlt className="text-2xl" />
                    )}
                    {/* <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </div> */}
                </motion.button>
            </div>
            <ul
                style={{
                    pointerEvents: isOpen ? "auto" : "none",
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                }}
                
                className={`
                    flex flex-col items-center justify-center
                    rounded-xl w-12
                    bg-neutral-800 border border-neutral-600/50
                    backdrop-blur-xl py-4 px-1
                `}
            >
                <li
                    className={`
                                w-10 h-10 flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiPlus className="h-5 w-5" />
                </li>
                <li
                    className={`
                                w-10 h-10 flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiGame className="h-5 w-5" />
                </li>
                <li
                    className={`
                                w-10 h-10 flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiHash className="h-5 w-5" />
                </li>
                <li
                    className={`
                                w-10 h-10 flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiHomeCircle className="h-5 w-5" />
                </li>
                {isMobile && (<li
                    className={`
                                w-10 h-10 flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <IoSearch className="h-5 w-5" />
                </li>)}
                {isMobile && (<li
                    className={`
                                w-10 h-10 flex justify-center items-center
                                p-0
                                transition duration-300 cursor-pointer
                            `}
                >
                    <ProfilePic />
                </li>)}
            </ul>{" "}
        </div>
    );
}
