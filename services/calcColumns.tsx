"use client";
import { useWindowWidth } from '@react-hook/window-size'

export const cardWidth = 315;
export const contentSpacing = 32;
export const cardSpacing = 20;

// export default function calculateColumns () {
//     const screenWidth = useWindowWidth();
//     const cardWidth = 315;
//     const contentSpacing = 32;
//     const cardSpacing = 20;

//     let numColumns = Math.floor((screenWidth - 2 * contentSpacing) / cardWidth);
//     const totalSpacing = (numColumns - 1) * cardSpacing;
//     const totalCardWidth = numColumns * cardWidth + totalSpacing;

//     if (totalCardWidth > screenWidth - 2 * contentSpacing) {
//         numColumns--;
//     }

//     console.log(useWindowWidth())

//     return numColumns;
// };
