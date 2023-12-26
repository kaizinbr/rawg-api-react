"use client";
import { IoSearch, IoChevronDown } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchBar from "./Search";
import ProfilePic from "./ProfilePic";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
    useAnimate,
    stagger,
    motion,
    useScroll,
    useMotionValueEvent,
    AnimatePresence,
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

function HomeBtn() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const router = useRouter()

    return (
        <div className="homeBtn">
            <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <button onClick={() => router.push('/')}>
                    {isHome ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

function SearchBtn() {
    return (
        <div className="homeBtn">
            <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                </svg>
            </div>
        </div>
    );
}

function CartBtn() {
    const pathname = usePathname();
    const isCart = pathname === "/cart";
    const router = useRouter()

    return (
        <div className="homeBtn">
            <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                <button onClick={() => router.push('/cart')}>
                    {isCart ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // const scope = useMenuAnimation(isOpen);

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
                flex flex-row items-center justify-center
                h-14 px-6
                fixed bottom-6  z-20 
                min-[1536px]:mx-auto min-[1536px]:left-auto min-[1536px]:relative max-w-[1536px]

                w-52 mx-auto
                transition-all duration-300 ease-in-out
            `}
            id="NavBar"
        >
            <div
                className={` NavBar
                flex flex-row items-start justify-between
                h-full px-6
                bg-neutral-700/80  min-[800px]:rounded-full border 
                min-[800px]:border-b-[1px] min-[800px]:border-neutral-600/20
                z-50 backdrop-blur-2xl
                min-[1536px]:mx-auto min-[1536px]:left-auto min-[1536px]:relative max-w-[1536px]
                absolute
                w-auto mx-0 my-0 rounded-none border-t-0 border-x-0 border-b-2 border-neutral-600/20
                shadow-2xl
                transition-all duration-300 ease-in-out
            `}
            >
                <div
                    className={`flex flex-row items-center justify-center gap-6 h-full w-full`}
                >
                    <HomeBtn />
                    <SearchBtn />
                    <CartBtn />
                </div>
            </div>
            {/* <div
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
                    </div> 
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
                                `}
                        >
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
            </div> */}
        </nav>
    );
}
