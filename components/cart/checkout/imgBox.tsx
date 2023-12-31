"use client";

import { useEffect, useState, useRef } from "react";
import fetchGameDetails from "@/services/fetchGameOnCart";
import Image from "next/image";
import { AnimatePresence, motion, usePresence } from "framer-motion";

export default function ImgBox({
    cartItems,
    // setAutodeletes
    // onRemove,
}: {
    cartItems: any;
    
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
            // const gameData = await fetchGameDetails(cartItems);
            setGameData(cartItems.map(async (game: any) => {
                await fetchGameDetails(game.id);
            }));
            console.log(gameData);
            setShowGenres(true);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
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
                </div>
    );
}
