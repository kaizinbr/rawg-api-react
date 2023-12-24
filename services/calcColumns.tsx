"use client";
import { useWindowWidth } from '@react-hook/window-size'

export const cardWidth = 315;
export const contentSpacing = 32;
export const cardSpacing = 20;

export default function calculateColumns (games: any, columnsCount: number) {
    const cardsPerColumn = Math.ceil(games.length / columnsCount);
    const columns = Array(columnsCount)
        .fill(null)
        .map((_, index) => {
            const cardsToDisplay = [];
            for (let i = 0; i < cardsPerColumn; i++) {
                const cardIndex = i * columnsCount + index;
                if (cardIndex < games.length) {
                    cardsToDisplay.push(games[cardIndex]);
                }
            }
            return cardsToDisplay;
        });

    return columns;
};
