import { AddToCartBtn } from "@/components/cart/add-to-cart";
import { color } from "framer-motion";
import {
    PiHeartBold,
    PiHeartFill,
    PiHeartBreakBold,
    PiShareFatBold,
    PiDotsThreeOutlineVerticalFill,
    PiStarFill,
    PiPlusCircleBold,
} from "react-icons/pi";

export default function GamePrevInfos({ game }: any) {
    const date = new Date(game.released);
    console.log(game);
    const releaseDate = date.toLocaleDateString("pt-BR");


    const colors = ["bg-amber-700", "bg-lime-700", "bg-rose-700", "bg-sky-700", "bg-pink-700", "bg-violet-700"]

    return (
        <div
            className={` Infos
                flex flex-col justify-center items-center min-[992px]:col-span-4 md:col-span-12 col-span-6
                order-2
            `}
        >
            <div
                className={`
                    rounded-2xl
                    w-full min-h-full
                `}
            >
                <div
                    className={`
                        w-full h-full flex flex-col 
                        justify-center 
                        gap-y-4 lg:gap-y-6 py-0 lg:py-6 px-0
                        text-sm md:text-base 
                    `}
                >
                    <div>
                        
                    <div
                                className={`genres
                                    flex flex-row justify-start items-center
                                    gap-3
                                `}
                            >
                                {game.genres
                                    .slice(0, 3)
                                    .map((genre: any, index: number) => {
                                        return (
                                            <div key={index}>
                                                <span
                                                    className={`
                                                    text-neutral-300 text-xs font-normal
                                                     px-2 py-1 rounded-md bg
                                                    ` + colors[Math.floor(Math.random() * colors.length)]
                                                
                                                }
                                                >
                                                    {genre.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                            </div>
                        <div className="col-span-2 flex justify- items-center my-3 lg:my-4 text-3xl md:text-4xl">
                            <h2 className="font-semibold ">R$ 69,19</h2>
                        </div>
                        <div className="flex  items-center text-neutral-200 font-light">
                            <span>{game.developers[0].name}</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="flex  items-center text-neutral-200 font-light">
                                <span>{game.reviews_count} reviews</span>
                            </div>
                            <div className="flex  items-center text-neutral-200 font-light">
                                <span>{releaseDate}</span>
                            </div>
                        </div>
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
                                flex flex-row gap-2 lg:gap-4  items-end
                                lg:my-3 min-h-fit max-h-[50px] 
                            `}
                    >
                        <AddToCartBtn
                            gameId={game.id}
                            gameName={game.name}
                            gameSlug={game.slug}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
