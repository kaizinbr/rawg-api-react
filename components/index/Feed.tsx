/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState, memo } from "react";
import { getGames, getMoreGames } from "@/services/rawg/getGameList";
import calculateColumns from "@/services/calcColumns";
import GameCard from "./gameCard/GameCard";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

interface Game {
    id: number;
}

interface Props {
    columnsCount: number;
}

const Feed = ({ columnsCount }: Props) => {
    const [games, setGames] = useState<Game[]>([]);
    const [removeMainLoading, setRemoveMainLoading] = useState(false);
    const [timeToLoadGames, setTimeToLoadGames] = useState(false);
    const [next, setNext] = useState("");
    const [newGames, setNewGames] = useState<Game[]>([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            const gameData = await getGames();
            setGames(gameData.results);
            setRemoveMainLoading(true);
            setNext(gameData.next);
            console.log("Next: ", next);
        };
        fetchData();
    }, []);

    const columns = calculateColumns(games, columnsCount);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest: any) => {
        console.log("Page scroll: ", latest);
        if (latest >= document.body.clientHeight - 640) {
            setTimeToLoadGames(true);
            console.log(document.body.clientHeight - 448);
            console.log(
                "ATENÇÃO!!!! Time to load games",
                timeToLoadGames,
                latest,
                window.scrollY
            );
        }
    });

    useEffect(() => {
        console.log(document.body.clientHeight - 640);
    }, [scrollY]);

    const LoadMoreGames = (url: string, columnsCount: number) => {
        useEffect(() => {
            const fetchData = async () => {
                const gameData = await getMoreGames(url);
                setNewGames(gameData.results);
                setRemoveLoading(true);
                setNext(gameData.next);
            };
            fetchData();
        }, []);

        const columns = calculateColumns(newGames, columnsCount);

        return (
            <>
                {newGames ? (
                    columns.map((column, index) => (
                        <div
                            key={`column-${index}`}
                            className="column grid gap-6"
                        >
                            {column.map((game) => (
                                <GameCard key={game.id} game={game} />
                            ))}
                        </div>
                    ))
                ) : (
                    <p>Algo errado</p>
                )}
            </>
        );
    };

    return (
        <div
            className={` feed
            grid gap-6 grid-cols-${columnsCount}
            px-4 md:px-8 items-start
            max-w-screen-2xl mx-auto
        `}
            style={{
                gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
            }}
        >
            {/* thanks to https://youtu.be/xPlDSbGhwr0 :) */}
            {!removeMainLoading && (
                <div className="col-span-4 flex justify-center items-center h-24">
                    <svg className="spinner">
                        <circle>
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                values="-90;810"
                                keyTimes="0;1"
                                dur="2s"
                                repeatCount="indefinite"
                            ></animateTransform>
                            <animate
                                attributeName="stroke-dashoffset"
                                values="0%;0%;-157.080%"
                                calcMode="spline"
                                keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0"
                                keyTimes="0;0.5;1"
                                dur="2s"
                                repeatCount="indefinite"
                            ></animate>
                            <animate
                                attributeName="stroke-dasharray"
                                values="0% 314.159%;157.080% 157.080%;0% 314.159%"
                                calcMode="spline"
                                keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0"
                                keyTimes="0;0.5;1"
                                dur="2s"
                                repeatCount="indefinite"
                            ></animate>
                        </circle>
                    </svg>
                </div>
            )}
            {games ? (
                columns.map((column, index) => (
                    <div key={`column-${index}`} className="column grid gap-6">
                        {column.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </div>
                ))
            ) : (
                <p>Algo errado</p>
            )}
            {timeToLoadGames && (
                    <div className="removibleLoading col-span-4 flex justify-center items-center h-24">
                        <svg className="spinner">
                            <circle>
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    values="-90;810"
                                    keyTimes="0;1"
                                    dur="2s"
                                    repeatCount="indefinite"
                                ></animateTransform>
                                <animate
                                    attributeName="stroke-dashoffset"
                                    values="0%;0%;-157.080%"
                                    calcMode="spline"
                                    keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0"
                                    keyTimes="0;0.5;1"
                                    dur="2s"
                                    repeatCount="indefinite"
                                ></animate>
                                <animate
                                    attributeName="stroke-dasharray"
                                    values="0% 314.159%;157.080% 157.080%;0% 314.159%"
                                    calcMode="spline"
                                    keySplines="0.61, 1, 0.88, 1; 0.12, 0, 0.39, 0"
                                    keyTimes="0;0.5;1"
                                    dur="2s"
                                    repeatCount="indefinite"
                                ></animate>
                            </circle>
                        </svg>
                    </div>
                ) 
                // LoadMoreGames(next, columnsCount)
                }
        </div>
    );
};

export default memo(Feed);
