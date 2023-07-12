"use client";
import Link from 'next/link'
import { BiHomeCircle, BiGame, BiHash, BiPlus, BiMenu } from "react-icons/bi";
import CreatePost from './CreatePost';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';


function FeedLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-center justify-center gap-1
            p-2 rounded-full group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
            text-red-400
            
        `}>
            <BiHomeCircle className='h-5 w-5' />
            {/* <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Início</span> */}
        </Link>
    )
}

function GameLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-center justify-center gap-1
            p-2 rounded-full group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
            
        `}>
            <BiGame className='h-5 w-5' />
            {/* <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Jogos</span> */}
        </Link>
    )
}

function AllLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-center justify-center gap-1
            p-2 rounded-full group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
        `}>
            <BiHash className='h-5 w-5' />
            {/* <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Explorar</span> */}
        </Link>
    )
}

function CreatePostLink() {
    return (
        <Link href="#" passHref className={`
            flex flex-row items-start justify-start gap-1
            p-2 rounded-full w-28  group-hover/navbtns:rounded-xl
            hover:bg-neutral-700/50 transition-all
        `}>
            <BiPlus className='h-5 w-5' />
            {/* <span className={`
                text-sm font-semibold
                invisible group-hover/navbtns:visible
                transition-all
            `}>Criar post</span> */}
        </Link>
    )
}

function MenuBtn () {
    return (
        <BiMenu className={`
            h-5 w-5
            text-neutral-100
            group-hover/navbtns:text-neutral-200
            transition-all
        `} />
    )
}

export default function NavControls() {

    const { scrollY } = useScroll()

    const ref = useRef<any>(null)
    const [isScrolling, setIsScrolling] = useState(false)

    useMotionValueEvent(scrollY, "change", async (latest) => {
        await (async () => {
            isMenuOpen ? handleMenuOpen() : null;            
            setIsScrolling(true);
            ref.current.style.opacity = `.5`;
        })()
        setTimeout(() => {
            ref.current.style.opacity = `1`
        }
            , 60000)

    })

    // SHOW HIDE MENU
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
        isMenuOpen ? ref.current.setAttribute('style', 'height: 56px !important') : ref.current.setAttribute('style', 'height: 250px !important')
    }

    // const [height, setHeight] = useState(0)

    useEffect(() => {
        setIsMenuOpen(true)
        ref.current.setAttribute('style', 'height: 250px !important')
    }, [])

    
    
    return (
            <motion.div 
            className={`
                flex flex-col-reverse items-center justify-start
                bg-neutral-800/80 rounded-[calc(56px/2)] 
                h-[56px] w-[56px] hover:opacity-100 transition-all
                fixed bottom-8 left-4  z-50
                backdrop-blur-md border border-neutral-700
                group/navbtns
            `}
            style={{}}
            ref={ref}
            >
                <div 
                onClick={() => {
                    handleMenuOpen();                    
                }}
                className={`
                    flex flex-row items-center justify-center
                    h-[56px] min-h-[56px] w-[56px] cursor-pointer
                    rounded-full group-hover/navbtns:rounded-xl
                    relative
                `}
                >
                    <BiMenu
                    className={`
                        h-5 w-5
                        text-neutral-100
                        group-hover/navbtns:text-neutral-200
                        absolute
                    `}/>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div className={`
                            flex flex-col items-center justify-center gap-2
                            w-[56px] 
                            group/navbtns
                        `}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: .2 }}
                        >
                            <div className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}>
                                <BiPlus className='h-5 w-5' />
                            </div>
                            <div className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}>
                                <BiGame className='h-5 w-5' />
                            </div>
                            <div className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}>
                                <BiHash className='h-5 w-5' />
                            </div>
                            <div className={`
                                w-[40px] h-[40px] flex justify-center items-center
                                rounded-full hover:bg-neutral-500/50
                                transition duration-300 cursor-pointer
                            `}>
                                <BiHomeCircle className='h-5 w-5' />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* <FeedLink />
                <GameLink />
                <AllLink />
                <CreatePostLink /> */}

            </motion.div>
    )
}