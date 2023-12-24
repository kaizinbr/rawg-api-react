/* eslint-disable @next/next/no-img-element */
import getScreenshots from "@/services/rawg/getScreenshots";
import { Key, useEffect, useState } from "react";
import { GameId } from "@/types/Game.types";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./gamePageStyle.css";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

interface results {
    count: number;
    next: string;
    previous: string;
    results: [
        {
            id: number;
            image: string;
            width: number;
            height: number;
            is_deleted: boolean;
        },
    ];
}

export default function GameScreenshots({ id }: GameId) {
    const [screenshots, setScreenshots] = useState<any>(null);
    const [gotScreenshots, setGotScreenshots] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const screenshotsData = await getScreenshots(id);
            setScreenshots(screenshotsData);
            setGotScreenshots(true);
        }
        fetchData();
    }, [id]);

    // console.log({screenshots: screenshots})

    return (
        <div className="flex flex-col justify-center items-center col-span-6 md:col-span-12 gap-4 order-5" id="screenshots">
            <h1 className="text-2xl font-bold mb-2">Screenshots</h1>
            <Swiper 
                className="mySwiper justify-center items-center"
                pagination={{
                    clickable: true,
                    dynamicBullets: false,
                    el: ".bulletsG",
                }}

                modules={[Pagination]}
                slidesPerView={'auto'}
                spaceBetween={30}
            >
                {gotScreenshots &&
                    screenshots.map((screenshot: any) => (
                        <SwiperSlide key={screenshot.id} className="max-w-[698.67px] screenshot-slide">
                            <Image                                
                                src={screenshot.image}
                                alt=""
                                className="w-auto h-full rounded-lg m-2"
                                width={698.67}
                                height={392.33}
                                // placeholder="blur"
                                // blurDataURL=""
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <div className={`
                flex justify-center items-center
            `}>
                <div className={`
                bulletsG
                flex justify-center items-center py-3 px-4 rounded-lg
                bg-neutral-500/30
            `}></div>
            </div>
        </div>
    );
}



// export function App() {
//     return (
//         <>
//             <Swiper
//                 navigation={true}
//                 modules={[Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     );
// }
