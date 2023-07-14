/* eslint-disable @next/next/no-img-element */
import getScreenshots from "@/services/rawg/getScreenshots";
import { useEffect, useState } from "react";
import { GameId } from "@/types/Game.types";

interface results {
    count: number;
    next: string;
    previous: string;
    results: [
        {
            id: number;
            image: string;
            width: number;
            height: number;
            is_deleted: boolean;
        }
    ]
}

export default function GameScreenshots({ id }: GameId) {
    const [screenshots, setScreenshots] = useState<results>({} as results);

    useEffect(() => {
        async function fetchData() {
            const screenshotsData = await getScreenshots({ id });
            setScreenshots(screenshotsData);
        }
        fetchData();
    }, [id]);
    console.log(screenshots)

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Screenshots</h1>
            <div className="flex flex-wrap justify-center items-center">
                {screenshots.results.map((screenshot) => (
                    <img
                        key={screenshot.id}
                        src={screenshot.image}
                        alt=""
                        className="w-96 h-96 rounded-lg m-2"
                    />
                ))}
            </div>
        </div>
    );
}