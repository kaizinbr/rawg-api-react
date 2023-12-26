"use client";

import { useEffect, useState } from "react";
import fetchGameDetails from "@/services/fetchGameOnCart";

export default function CartCard({
    gameId,
    // onRemove,
}: {
    gameId: any;
    // onRemove: (game: any) => voData;
}) {

    const [gameData, setGameData] = useState<any>([]);

    // let gameData;

    useEffect(() => {
        const fetchData = async () => {
            const gameData = await fetchGameDetails(gameId);
            setGameData(gameData);
        };
        fetchData();
    }, []);

    return (
        <div className={`
            flex flex-col
            m-auto
            w-full
            bg-neutral-800
            rounded-xl p-6
        `}>
            <div className="flex flex-row w-full">
                    <h2 className="text-xl mb-8">{gameData!.description}</h2>
                </div>
        </div>
    );
}