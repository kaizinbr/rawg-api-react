import Image from "next/image";
import { PiStarFill } from "react-icons/pi";

import { HeartBtn, PostBtn, ShareBtn, MoreBtn } from "../gameCard/cardCtrls";
/* eslint-disable @next/next/no-img-element */
export default function GameHeader({ game }: any) {
    const date = new Date(game.released);
    const releaseDate = date.toLocaleDateString("pt-BR");
    // console.log(game.id)
    return (
        <div className="grid grid-cols-3 gap-y-4 gap-x-8 col-span-12">
            <div
                className={` Title col-span-3
                flex flex-col justify-center items-start
            `}
            >
                <h1 className="text-4xl font-bold">{game.name}</h1>
            </div>
            <div
                className={` Imagens col-span-2
                flex flex-col justify-center items-center relative
            `}
            >
                <Image
                    src={game.background_image}
                    alt=""
                    width={1280}
                    height={720}
                    priority={true}
                    className="rounded-xl aspect-video"
                />
            </div>
            <div
                className={` Infos
                flex flex-col justify-center items-center
            `}
            >
                <div
                    className={`
                    bg-neutral-800 rounded-2xl
                    w-full h-fit
                `}
                >
                    <div
                        className={`
                        w-full h-auto grid grid-cols-2
                        justify-around
                        gap-y-4 lg:gap-y-6 py-4 lg:py-6 px-4
                    `}
                    >
                        <div className="col-span-2 flex justify-center items-center my-4">
                            <PiStarFill className="text-4xl text-amber-200" />
                            <h2 className="font-semibold text-4xl">
                                {game.rating}
                            </h2>
                        </div>
                        <div className="flex justify-center items-center text-xs md:text-sm lg:text-base text-neutral-200 font-light">
                            <span>{game.reviews_count} reviews</span>
                        </div>
                        <div className="flex justify-center items-center text-xs md:text-sm lg:text-base text-neutral-200 font-light">
                            <span>{game.added} salvos</span>
                        </div>
                        <div className="flex justify-center items-center text-xs md:text-sm lg:text-base text-neutral-200 font-light">
                            <span>{game.playtime} horas</span>
                        </div>
                        <div className="flex justify-center items-center text-xs md:text-sm lg:text-base text-neutral-200 font-light">
                            <span>{game.achievements_count} conquistas</span>
                        </div>
                        <div className="flex justify-center items-center text-xs md:text-sm lg:text-base text-neutral-200 font-light">
                            <span>{releaseDate}</span>
                        </div>
                        <div className="flex justify-center items-center text-xs md:text-sm lg:text-base text-neutral-200 font-light">
                            <span>{game.developers[0].name}</span>
                        </div>
                        <div className="flex flex-row gap-2 lg:gap-4 col-span-2 justify-center items-center text-xs lg:text-base text-neutral-200 font-light">
                            {game.genres.map((genre: any) => (
                                <span
                                    className="py-1 px-2 lg:px-4 bg-neutral-700 rounded-lg"
                                    key={genre.id}
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                        <div
                            className={`
                                cardCtrl col-span-2 w-full h-8 relative
                                flex flex-row justify-around items-end
                                bottom-0 `}
                        >
                            <div
                                className={`
                                        flex flex-row justify-around items-center w-full
                                        mb-0 absolute
                                    `}
                            >
                                <HeartBtn />
                                <PostBtn />
                                <ShareBtn />
                                <MoreBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
