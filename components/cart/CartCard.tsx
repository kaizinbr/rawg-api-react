"use client";

import { useEffect, useState } from "react";
import fetchGameDetails from "@/services/fetchGameOnCart";
import Image from "next/image";

export default function CartCard({
    gameId,
    // onRemove,
}: {
    gameId: any;
    // onRemove: (game: any) => voData;
}) {
    const [gameData, setGameData] = useState<any>([]);
    const [showGenres, setShowGenres] = useState(false);

    // let gameData;

    useEffect(() => {
        const fetchData = async () => {
            const gameData = await fetchGameDetails(gameId);
            setGameData(gameData);
            setShowGenres(true);
        };
        fetchData();
    }, []);

    return (
        <div
            className={`
            flex flex-col
            m-auto
            w-full
            bg-neutral-800
            rounded-xl p-5
        `}
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
                                gameData!.genres.map(
                                    (genre: any, i: number) => {
                                        return (
                                            <div key={i}>
                                                <span
                                                    className={`
                                                        text-neutral-300 text-xs font-normal
                                                        bg-neutral-700 px-2 py-1 rounded-md
                                                        `}
                                                >
                                                    {genre.name}
                                                </span>
                                            </div>
                                        );
                                    }
                                )}
                        </div>
                        <h1 className="text-xl font-bold mb-8">
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
                        <h3 className="text-2xl font-semibold col-span-1">
                            R$ <span>69,99</span>
                        </h3>
                        <button
                            className={`flex flex-row justify-center items-center
                                        bg-emerald-500 rounded-md py-2 px-4
                                        row-span-2 row-start-3
                                        hover:bg-emerald-600 transition duration-200
                                    `}
                        >
                            <h3 className="text-xl font-semibold text-white">
                                Remover
                            </h3>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-row w-full">
                <button
                    className={`
                        flex flex-row
                        m-auto
                        w-full
                        bg-gray-800
                        rounded-md
                        p-4
                    `}
                    // onClick={() => onRemove(gameData)}
                >
                    <h1 className="text-3xl mb-8">Remove</h1>
                </button>
            </div> */}
        </div>
    );
}
