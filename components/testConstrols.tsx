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
                    : "inset(90% 50% 10% 50% round 10px)",
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

export default function TestConstrols() {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    const { scrollY } = useScroll();

    // const scope = useRef<any>(null)
    const [isScrolling, setIsScrolling] = useState(false);

    useMotionValueEvent(scrollY, "change", async (latest) => {
        await (async () => {
            isOpen ? handleMenuOpen() : null;
            setIsScrolling(true);
            scope.current.style.opacity = `.5`;
        })();
    });

    // SHOW HIDE MENU

    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
        scope.current.setAttribute("style", "opacity: 1");
    };

    return (
        <nav
            className="menu gap-4 fixed bottom-8 left-10 flex flex-col-reverse z-50"
            ref={scope}
        >
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    handleMenuOpen();
                    setIsOpen(!isOpen);
                }}
                className={`
                bg-neutral-800/80 ]
                    flex flex-row items-center justify-center
                    h-[56px] min-h-[56px] w-[56px] cursor-pointer
                    rounded-2xl group-hover/navbtns:rounded-xl
                    relative backdrop-blur-md border border-neutral-700/10
                `}
            >
                {isOpen ? (
                    <BiX className="text-2xl" />
                ) : (
                    <BiMenu className="text-2xl" />
                )}
                {/* <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </div> */}
            </motion.button>
            <ul
                style={{
                    pointerEvents: isOpen ? "auto" : "none",
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                }}
                className={`
                    flex flex-col-reverse items-center justify-center
                    min-h-[56px] w-[56px] cursor-pointer
                    rounded-2xl 
                    bg-neutral-800/80 border border-neutral-700/10
                    relative backdrop-blur-md 
                    py-4 px-2
                `}
            >
                <li
                    className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiPlus className="h-5 w-5" />
                </li>
                <li
                    className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiGame className="h-5 w-5" />
                </li>
                <li
                    className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiHash className="h-5 w-5" />
                </li>
                <li
                    className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}
                >
                    <BiHomeCircle className="h-5 w-5" />
                </li>
            </ul>{" "}
        </nav>
    );
}
