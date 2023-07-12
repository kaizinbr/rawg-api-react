"use client";
import React, { useEffect, useState } from 'react';
import GameCard from './gameCard/GameCard';
import data from '../../data/games.json'

interface Game {
    id: number;
}

interface Props {
    columnsCount: number;
}

const Feed = ({ columnsCount }: Props) => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        setGames(data[0].results);
    }, []);


    const cardsPerColumn = Math.ceil(games.length / columnsCount);

    const columns = Array(columnsCount).fill(null).map((_, index) => {
        const cardsToDisplay = [];
        for (let i = 0; i < cardsPerColumn; i++) {
            const cardIndex = i * columnsCount + index;
            if (cardIndex < games.length) {
                cardsToDisplay.push(games[cardIndex]);
            }
        }
        return cardsToDisplay;
    });

    return (
        <div className={` feed
            grid gap-6 grid-cols-${columnsCount}
            px-8 items-start
        `}
            style={{
                gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`
            }}
        >
            {/* {games.map((game) => (
                <GameCard key={game.id} game={game} />
            ))} */}

            {columns.map((column, index) => (
                <div key={`column-${index}`} className="column grid gap-6 ">
                    {column.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            ))}

        </div>
    );
};

export default Feed;
