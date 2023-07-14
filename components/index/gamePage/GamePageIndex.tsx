"use client";
import { memo } from 'react';
import getGameData from "@/services/rawg/getGameData";
import { useEffect, useState } from "react";
import { GameId, GameInfos } from "@/types/Game.types";
import data from '@/data/gameData.json'

import GameHeader from "./GameHeader"; 
import GameScreenshots from './GameScreenshots';

// async function getGame({ id }: GameId) {
//     const gameData = await getGameData({ id });
//     return gameData;
// }

const GameIndex = memo(function GameIndex ({ id }: GameId) {

    // const [game, setGame] = useState<{}>();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // const gameData = await getGame({ id });
    //         setGame(data);
    //     };
    //     fetchData();
    // }, [id]);

    
    // useEffect(() => {
    // //     const fetchData = async () => {
    // //         const gameData = await getGameData({id});
    // //         setGame(gameData);
    // //     };
    // //     fetchData();
    //     setGame(data)
    // }, []);

    return (
        <div className={`
            w-9/12 m-auto
        `}>
            <p>Esse game tem o slug: {id}</p>
            <GameHeader game={data} />
            <GameScreenshots id={id} />
        </div>
    )
})

export default GameIndex;