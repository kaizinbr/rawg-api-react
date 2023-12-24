import { PiStarFill, PiStarLight } from "react-icons/pi";
import { BiArrowToRight } from "react-icons/bi";
import { FaHeartBroken } from "react-icons/fa";
import Link from "next/link";
import {
    motion,
    useAnimate,
    useMotionValueEvent,
    useScroll,
    stagger,
} from "framer-motion";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        // animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

        animate(
            "#reviewsCount",
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
    }, [animate, isOpen]);

    return scope;
}

function Bar(rateArr: {
    id: number;
    title: string;
    count: number;
    percent: number;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    let color;

    switch (rateArr.id) {
        case 5:
            color = "bg-green-600";
            break;
        case 4:
            color = "bg-blue-600";
            break;
        case 3:
            color = "bg-yellow-600";
            break;
        case 1:
            color = "bg-red-600";
            break;
    }

    const handleLabelTagOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full bg-neutral-800 rounded-full">
            <motion.div
                className="relative flex flex-col h-5 cursor-pointer"
                style={{ width: `${rateArr.percent}%` }}
                onClick={() => {
                    handleLabelTagOpen();
                }}
            >
                <div
                    className={`
                                    m-auto flex items-center justify-center
                                `}
                    ref={scope}
                >
                    <div
                        className={` 
                                        flex flex-row gap-1 items-center justify-center absolute bottom-3/4 mb-2 z-50
                                        bg-neutral-700 py-2 px-5 rounded-full
                                    `}
                        id="reviewsCount"
                    >
                        <span>{rateArr.count}</span>
                        <span>avaliações</span>
                    </div>
                </div>
                <div
                    className={
                        color +
                        `
                                        flex flex-row h-5 rounded-full absolute
                                        w-full
                                    `
                    }
                ></div>
            </motion.div>
        </div>
    );
}

function Label(rateArr: {
    id: number;
    title: string;
    count: number;
    percent: number;
}) {
    let titlePT;

    switch (rateArr.title) {
        case "exceptional":
            titlePT = "Excepcional";
            break;
        case "recommended":
            titlePT = "Recomendo";
            break;
        case "meh":
            titlePT = "Meh";
            break;
        case "skip":
            titlePT = "Passo";
            break;
    }

    return (
        <div className="flex flex-row justify-center items-center gap-3">
            <p>{titlePT}</p>
        </div>
    );
}

export function GameRating({ game }: any) {
    const ratingParse = Math.floor(game.rating);
    let rateIndex = ratingParse;
    return (
        <div className="flex flex-col justify-center items-start col-span-6 md:col-span-12 gap-4 order-6">
            <div>
                <h3 className="text-2xl text-left font-bold">Avaliações</h3>
            </div>
            <div className="grid w-full grid-cols-12 gap-8">
                <div
                    className={`
                    grid grid-cols-2 justify-end items-start gap-2 min-[992px]:col-span-2 md:col-span-3 col-span-12
                `}
                >
                    <h4 className="text-5xl sm:text-7xl font-bold md:col-span-2 md:row-span-1 row-span-2 md:text-start text-end">{game.rating}</h4>
                    <div className="flex flex-row gap-4 md:col-span-2 items-end h-full">
                        {Array.from(Array(ratingParse), (index: number, e) => {
                            return (
                                <PiStarFill
                                    key={--rateIndex}
                                    className="text-2xl text-yellow-500"
                                />
                            );
                        })}
                    </div>
                    <span className="text-neutral-300 md:col-span-2 md:col-start-1 col-start-2">
                        {game.reviews_count} avaliações
                    </span>
                </div>
                <div
                    className={`
                    grid grid-cols-12 grid-rows-4 gap-3 sm:gap-4 min-[992px]:col-span-10 md:col-span-9 col-span-12
                `}
                >
                    <div className="flex flex-col justify-center items-end gap-4 col-span-3 md:col-span-2 row-span-4">
                        {game.ratings.map((rate: any, index: number) => {
                            return <Label key={index} {...rate} />;
                        })}
                    </div>
                    <div
                        className={`
                            flex flex-col h-full justify-between items-start gap-4
                            col-span-9 md:col-span-10 row-span-4
                        `}
                    >
                        {game.ratings.map((rate: any, index: number) => {
                            return <Bar key={index} {...rate} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function GameMetacritic({ game }: any) {
    function getBgColor(score: number) {
        if (score >= 90) {
            return "bg-green-600";
        } else if (score >= 75) {
            return "bg-blue-600";
        } else if (score >= 50) {
            return "bg-yellow-600";
        } else {
            return "bg-red-600";
        }
    }

    const isNull = game.metacritic === null;

    return (
        <div className={`
            order-2 min-[992px]:order-4 flex flex-col justify-around items-center 
            bg-neutral-800 rounded-2xl p-4 gap-6 lg:max-h-[500px] max-h-[700px]
            md:col-span-7 col-span-3 min-[992px]:col-span-4 
        `}>
            <div className="flex flex-col justify-center items-center gap-5">
                <div
                    className={`
                rounded-lg p-6 + ${getBgColor(game.metacritic)}
            `}
                >
                    {isNull ? (
                        <FaHeartBroken className="text-5xl font-semibold" />
                    ) : (
                        <h3 className="text-5xl font-semibold">
                            {game.metacritic}
                        </h3>
                    )}
                </div>
                <p>
                    Nota <span className="font-bold">{game.metacritic}</span> no
                    Metacritic
                </p>
            </div>

            {isNull ? (
                <span className="font-semibold text-lg">
                    Parece que não há avaliação ainda
                </span>
            ) : (
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <h4 className="font-semibold">Individuais</h4>
                    <div
                        className={`
                    grid grid-cols-3 justify-around gap-2
                `}
                    >
                        {game.metacritic_platforms
                            .slice(0, 3)
                            .map((platform: any, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="justify-center items-center gap-2 flex flex-col lg:flex-row bg-neutral-700 rounded-lg"
                                    >
                                        <div
                                            className={`
                                                flex flex-col justify-center items-center gap-2
                                                px-2 py-6 min-w-[75px] text-center
                                            `}
                                        >
                                            <span className="text-xl font-semibold">
                                                {platform.metascore}
                                            </span>
                                            <span className="text-sm">
                                                {platform.platform.name}
                                            </span>
                                        </div>
                                        {/* {index !==
                                        Object.values(game.metacritic_platforms).length - 1 && index !== 2 ? (
                                            <div className="lg:h-full lg:w-[1px] h-[1px] w-full bg-neutral-700 rounded-full" />
                                        ) : null} */}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            )}
            <Link
                className={`
                    w-full py-2 px-4 rounded-xl bg-neutral-700
                    hover:bg-neutral-500 transition duration-300
                    text-neutral-200 hover:text-neutral-950 text-center font-semibold
                    flex flex-row justify-center items-center gap-1
                `}
                href={game.metacritic_url}
                target={"_blank"}
            >
                Veja mais <BiArrowToRight className="text-lg" />
            </Link>
        </div>
    );
}
