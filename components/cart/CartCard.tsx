"use client";

import { useEffect, useState, useRef } from "react";
import fetchGameDetails from "@/services/fetchGameOnCart";
import Image from "next/image";
import RmFromCartBtn from "./RmFromCartBtn";
import { AnimatePresence, motion, usePresence } from "framer-motion";

export default function CartCard({
    gameId,
    // setAutodeletes
    setItemsLength
    // onRemove,
}: {
    gameId: any;
    setItemsLength: any;
    
    // onRemove: (game: any) => voData;
}) {
    const [gameData, setGameData] = useState<any>([]);
    const [showGenres, setShowGenres] = useState(false);
    const [autodeletes, setAutodeletes] = useState<any>(false);

    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
        if (!isPresent) {
            (ref.current, {
                opacity: 0,
                onComplete: () => safeToRemove?.(),
            });
        }
    }, [isPresent, safeToRemove]);
    // let gameData;

    useEffect(() => {
        const fetchData = async () => {
            const gameData = await fetchGameDetails(gameId);
            setGameData(gameData);
            setShowGenres(true);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {!autodeletes && (
                <div
                    className={`
                        flex flex-col
                        m-auto
                        w-full
                        bg-neutral-800
                        rounded-xl p-5
                        transition duration-500
                        hover:bg-neutral-700
                        
                    `}
                    // ref={ref}
                >
                    <div className="flex flex-row w-full gap-4">
                        <div className="flex flex-col ">
                            <picture
                                className={`
                            flex flex-col
                            rounded-md
                            overflow-hidden h-full w-32
                            `}
                            >
                                <Image
                                    src={gameData!.background_image}
                                    alt={gameData.name}
                                    height={200}
                                    width={300}
                                    className={`
                                object-cover
                                h-full w-full
                            `}
                                />
                            </picture>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 w-full h-32">
                            <div
                                className={`
                            flex flex-col
                            gap-4
                            row-span-3
                        `}
                            >
                                <div
                                    className={`genres
                                        flex flex-row justify-start items-center
                                        gap-3
                                    `}
                                >
                                    {showGenres &&
                                        gameData!.genres.slice(0, 2).map(
                                            (genre: any, i: number) => {
                                                return (
                                                    <div key={i}>
                                                        <span
                                                            className={`
                                                        text-neutral-100 text-xs font-normal
                                                        bg-neutral-500 px-2 py-1 rounded-md
                                                        `}
                                                        >
                                                            {genre.name}
                                                        </span>
                                                    </div>
                                                );
                                            }
                                        )}
                                </div>
                                <h1 className="text-lg md:text-xl font-bold mb-8">
                                    {gameData!.name}
                                </h1>
                            </div>
                            <div
                                className={`
                            grid grid-rows-3 justify-end items-center
                            gap-3
                            col-span-1 row-span-3
                        `}
                            >
                                <h3 className="md:text-2xl text-xl font-semibold col-span-1">
                                    R$ <span>69,99</span>
                                </h3>
                                <RmFromCartBtn
                                    gameId={gameId}
                                    setAutodeletes={setAutodeletes}
                                    setItemsLength={setItemsLength}
                                />
                            </div>
                        </div>
                    </div>
                </div>
         )}
        </>
    );
}
