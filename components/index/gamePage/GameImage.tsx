import Image from "next/image";
import { PiHeartBold, PiStarFill } from "react-icons/pi";

import { HeartBtn, PostBtn, ShareBtn, MoreBtn } from "../gameCard/cardCtrls";
/* eslint-disable @next/next/no-img-element */
export default function GameImage({ game }: any) {
    // console.log(game.id)
    return (
        <div className="grid grid-cols-3 col-span-6 md:col-span-12 min-[992px]:col-span-8 order-1">
            
            <div
                className={` Imagens col-span-3 min-[770px]:col-span-3
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

            
        </div>
    );
}
