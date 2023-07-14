/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import {
    PiCaretDownBold,
    PiStarFill
} from 'react-icons/pi';
import { HeartBtn, PostBtn, ShareBtn, MoreBtn } from './cardCtrls';
import Transition from '../Transition';
import AgeRatingSpan from './AgeRatingSpan';

interface CardProps {
    game: any;
}

const imgVariants = {
    hover: {
        scale: 1.2
    }
}

const GameCard = ({ game }: CardProps) => {
    const [showInfos, setShowInfos] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [height, setHeight] = useState(0)
    const heightRef = useRef<any>(null)

    const isMobile = window.innerWidth < 768

    useEffect(() => {
        setHeight(heightRef.current.clientHeight)
        // isMobile ? setShowInfos(true) : setShowInfos(false)
    }, [])

    const footerRef = useRef<any>(null)
    const [footerInitialHeight, setFooterInitialHeight] = useState(0)

    useEffect(() => {
        setFooterInitialHeight(footerRef.current.clientHeight)
        // console.log('clicked começou em: ', clicked)
    }, [])

    const expandFooter = () => {
        console.log('entrou no expand footer')

        if (isHovered) {
            setShowInfos(true)
        } else {
            setShowInfos(false)
        }

        // setShowInfos(!showInfos)
        // footerRef.current.style.height = isHovered ? 'auto' : '250px'
    }



    return (
        <>
            <div className={`
                game-card
                w-full rounded-xl p-0 m-0
                bg-neutral-800 overflow-hidden
                flex flex-col justify-start items-start
                `}>
                <motion.div className={`
                    cardImage
                    w-full overflow-hidden
                    flex justify-center items-center
                    group/dots
                `}
                    // style={{ maxWidth: width }}
                    onMouseOver={() => {
                        setHeight(heightRef.current.clientHeight)
                    }}
                    onLoad={() => {
                        setHeight(heightRef.current.clientHeight)
                    }}
                    whileHover={{ height: height + 20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                    <motion.img
                        src={game.background_image}
                        alt={game.name}
                        style={{ width: 'auto', height: '100%', minWidth: '100%' }}
                        className={`                        
                        bg-cover bg-center z-10
                        object-cover
                        `}
                        whileTap={{ scale: 1.1 }}
                        ref={heightRef}
                    />

                </motion.div>

                <motion.div className={`
                    cardFooter p-4
                    w-full flex flex-col justify-between items-start gap-4
                    grow transition duration-300
                `}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    animate={{ height: showInfos ? '250px' : footerInitialHeight }}
                    // whileHover={{ height: 250, minHeight: 'auto' }}
                    onClick={() => {
                        setClicked(!clicked)
                        expandFooter()
                    }}
                    onHoverStart={() => {
                        setIsHovered(true)
                        setShowInfos(true)
                    }}
                    onHoverEnd={() => {
                        setIsHovered(false)
                        if (clicked) {
                            return
                        } else {
                            setShowInfos(false)
                        };
                    }}
                    ref={footerRef}
                >
                    <div className="mainInfos w-full">
                        {/* <h1>{heightF}</h1> */}
                        <Link
                            href={`/games/${game.id}/${game.slug}`}
                            className={`
                                text-neutral-100 text-lg font-semibold
                                hover:text-red-300 transition duration-300
                                w-fit
                            `}
                        >{game.name}</Link>
                        <div className={`genres
                                flex flex-row justify-start items-center
                                gap-3
                            `}>
                            {game.genres.slice(0, 3).map((genre: any, index: number) => {
                                return (
                                    <div key={index}>
                                        <Link
                                            href={`/genres/${genre.slug}`}
                                            className={`
                                                text-neutral-300 text-xs font-normal
                                                bg-neutral-700 px-2 py-1 rounded-md
                                                `}
                                        >{genre.name}</Link>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <AnimatePresence>
                        {showInfos && (
                            <Transition className={`
                                flex flex-col justify-between items-start
                                w-full gap-4 h-full
                                Hided `}>
                                <div className={`
                                    flex flex-row justify-start items-center
                                    gap-3 text-xs font-bold`}>
                                    <AgeRatingSpan ageRatingId={game.esrb_rating?.id} ageRatingName={game.esrb_rating?.name} />
                                    <div className={`
                                        text-neutral-300 text-sm font-bold
                                        flex flex-row justify-start items-end
                                        gap-1
                                    `}>
                                        <PiStarFill className={`text-amber-200 text-xl`} />
                                        <span>{game.rating}</span>
                                        <p className='text-[10px] font-light'>{game.ratings_count} avaliações</p>
                                    </div>
                                </div>
                                <div className={`
                                flex flex-row justify-start items-center
                                flex-wrap
                                gap-2 text-xs font-bold `}>
                                    <p>Tags:</p>
                                    {game.tags.slice(0, 3).map((tag: any, index: number) => {
                                        return (
                                            <div key={index}>
                                                <Link
                                                    href={`/tags/${tag.slug}`}
                                                    className={`
                                                    text-neutral-300 text-[11px] font-normal
                                                    bg-neutral-700 p-1 rounded-md
                                                    `}
                                                >{tag.name}</Link>
                                            </div>
                                        )
                                    })
                                    }
                                    {/* </div> */}
                                </div>
                                <div className={`
                                cardCtrl w-full h-8 relative
                                flex flex-row justify-around items-end
                                bottom-0 `}>
                                    <div className={`
                                        flex flex-row justify-around items-center w-full
                                        mb-0 absolute
                                    `}>
                                        <HeartBtn />
                                        <PostBtn />
                                        <ShareBtn />
                                        <MoreBtn />
                                    </div>
                                </div>
                            </Transition>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    );
};

export default GameCard;
