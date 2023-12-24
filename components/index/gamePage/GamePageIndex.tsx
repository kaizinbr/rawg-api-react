"use client";
import { memo } from "react";
import getGameData from "@/services/rawg/getGameData";
import { useEffect, useState } from "react";
import { GameId, GameInfos } from "@/types/Game.types";
import data from "@/data/gameData.json";
import GameImage from "./GameImage";
import GameScreenshots from "./GameScreenshots";
import GameDesc from "./GameDesc";
import GamePlatforms from "./GamePlatforms";
import { GameRating, GameMetacritic } from "./GameRating";
import GameSpecifications from "./GameMoreInfos";
import GameMoreLinks from "./GameMoreLinks";
import GamePrevInfos from "./GamePrevInfos";

const GameApp = memo(function GameIndex({ id }: GameId) {
    const [game, setGame] = useState<GameInfos>();

    useEffect(() => {
        const fetchData = async () => {
            const gameData = await getGameData({ id });
            console.log(gameData);

            setGame(gameData);
        };
        fetchData();
        // setGame(gameData)
        const box = document.getElementById("arrowBackBtnBox");
    }, [id]);

    // ver como fazer varios fetchs ao mesmo tempo https://youtu.be/PtDIVU_tlo0?t=1555

    return (
        <div
            className={`
            grid grid-cols-6 md:grid-cols-12
            m-auto sm:
            gap-x-4 lg:gap-x-8 gap-y-10 lg:gap-y-16 mt-16
            w-full lg:w-9/12 lg:min-w-[950px]
        `}
        >
            {/* <p>Esse game tem o slug: {id}</p> */}
            {game && (
                <>
                    <div
                        className={` Title
                            flex flex-col justify-center items-start
                            col-span-6 md:col-span-12
                        `}
                    >
                        <h1 className="text-2xl md:text-4xl font-bold">{game.name}</h1>
                    </div>
                    <GameImage game={game} />
                    <GamePrevInfos game={game} />
                    <GameDesc game={game}></GameDesc>
                    <GameMetacritic game={game} />
                    <GameScreenshots id={id} />
                    <GameRating game={game} />
                    <GameSpecifications game={game} />
                    <GameMoreLinks game={game} />
                    <GamePlatforms game={game} />
                </>
            )}
        </div>
    );
});

export default GameApp;
