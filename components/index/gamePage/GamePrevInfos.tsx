import { AddToCartBtn } from '@/components/cart/add-to-cart';
import {
    PiHeartBold,
    PiHeartFill,
    PiHeartBreakBold,
    PiShareFatBold,
    PiDotsThreeOutlineVerticalFill,
    PiStarFill,
    PiPlusCircleBold
} from 'react-icons/pi'

export default function GamePrevInfos({ game }: any) {    
    const date = new Date(game.released);
    console.log(game)
    const releaseDate = date.toLocaleDateString("pt-BR");
    return (
            <div
                className={` Infos
                flex flex-col justify-center items-center min-[992px]:col-span-4 md:col-span-5 col-span-3
                order-2
            `}
            >
                <div
                    className={`
                    bg-neutral-800 rounded-2xl
                    w-full min-h-full
                `}
                >
                    <div
                        className={`
                        w-full h-full grid grid-cols-2
                        justify-around
                        gap-y-4 lg:gap-y-6 py-4 lg:py-6 px-4
                        text-sm md:text-base text-center
                    `}
                    >
                        <div className="col-span-2 flex justify-center items-center my-3 lg:my-4 text-3xl md:text-4xl">
                            <PiStarFill className=" text-amber-200" />
                            <h2 className="font-semibold ">
                                {game.rating}
                            </h2>
                        </div>
                        <div className="flex justify-center items-center text-neutral-200 font-light">
                            <span>{game.reviews_count} reviews</span>
                        </div>
                        <div className="flex justify-center items-center text-neutral-200 font-light">
                            <span>{game.added} salvos</span>
                        </div>
                        <div className="flex justify-center items-center text-neutral-200 font-light">
                            <span>{game.playtime} horas</span>
                        </div>
                        <div className="flex justify-center items-center text-neutral-200 font-light">
                            <span>{game.achievements_count} conquistas</span>
                        </div>
                        <div className="flex justify-center items-center text-neutral-200 font-light">
                            <span>{releaseDate}</span>
                        </div>
                        <div className="flex justify-center items-center text-neutral-200 font-light">
                            <span>{game.developers[0].name}</span>
                        </div>
                        {/* <div className="flex flex-row gap-2 lg:gap-4 col-span-2 justify-center items-center text-xs lg:text-base text-neutral-200 font-light">
                            {game.genres.map((genre: any) => (
                                <span
                                    className="py-1 px-2 lg:px-4 bg-neutral-700 rounded-lg"
                                    key={genre.id}
                                >
                                    {genre.name}
                                </span>
                            ))}
                        </div> */}
                        <div
                            className={`
                                cardCtrl col-span-2 w-full
                                flex flex-row gap-2 lg:gap-4 justify-around items-end
                                lg:my-3 min-h-fit max-h-[50px]
                            `}
                        >
                            <div
                                className={`
                                    flex justify-center items-center border border-neutral-500 rounded-xl
                                    transition duration-300 
                                    cursor-pointer py-3 lg:py-0 h-full aspect-square w-auto
                                    hover:bg-neutral-500 hover:text-neutral-800
                                `}
                            >
                                <PiHeartBold
                                    className={`
                                            text-base md:text-lg lg:text-xl 
                                        `}
                                />
                            </div>
                            {/* <button
                                className={`col-span-3 flex flex-row text-base
                                justify-center items-center border border-neutral-700  
                                bg-neutral-700 rounded-xl py-1 lg:py-2 w-full h-full
                                gap-2
                            `}
                            >
                                <span>Criar post</span>
                                <PiPlusCircleBold
                                className={`
                                    text-neutral-300 text-base md:text-lg
                                    cursor-pointer
                                `} />
                            </button> */}
                            <AddToCartBtn gameId={game.id} gameName={game.name} gameSlug={game.slug} />
                        </div>
                    </div>
                </div>
            </div>
    )
}