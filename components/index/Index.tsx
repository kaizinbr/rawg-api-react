"use client";
import Feed from "./Feed";
import Link from "next/link";
import { cardSpacing, contentSpacing, cardWidth } from "../../services/calcColumns";
import { useEffect, useState } from "react";
import { useWindowWidth } from '@react-hook/window-size';

// function calculateColumns () {
//     // const [ width, setWidth ] = getCurrentDimension();

//     const screenWidth = window.innerWidth;
//     const cardWidth = 340;
//     const contentSpacing = 32;
//     const cardSpacing = 24;

//     let numColumns = Math.floor((screenWidth - 2 * contentSpacing) / cardWidth);
//     const totalSpacing = (numColumns - 1) * cardSpacing;
//     const totalCardWidth = numColumns * cardWidth + totalSpacing;

//     if (totalCardWidth > screenWidth - 2 * contentSpacing) {
//         numColumns--;
//     }

//     return numColumns;
// };
export default function Index() {
    const [columnsCount, setColumnsCount] = useState(1);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        setColumnsCount(Math.floor(windowWidth / cardWidth) || 1);
    }, [windowWidth]);
    useEffect(() => {window.addEventListener('resize', () => {
        setColumnsCount(Math.floor(windowWidth / cardWidth) || 1);
    })})

    return (
        <div className={`
            min-h-screen w-full
       `}>
            <Feed columnsCount={columnsCount} />
        </div>
    )
}