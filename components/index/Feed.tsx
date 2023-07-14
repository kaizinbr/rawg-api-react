"use client";
import React, { useEffect, useState, memo } from 'react';
import getGames from '../../services/rawg/getGameList';
import GameCard from './gameCard/GameCard';

interface Game {
    id: number;
}

interface Props {
    columnsCount: number;
}

const Feed = ({columnsCount}: Props) => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const gameData = await getGames();
            setGames(gameData);
        };
        fetchData();
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
            {columns.map((column, index) => (
                <div key={`column-${index}`} className="column grid gap-6">
                    {column.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            ))}
                
        </div>
    );
};

export default memo(Feed);
