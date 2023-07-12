/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import data from "../../../data/banner.json"
import "../styles.css";
import { Navigation, Pagination, Autoplay } from "swiper";
import ColorThief from 'colorthief';
import BannerCard from "./BannerCard";

interface ImageComponentProps {
    imageUrl: string;
}



export default function Banner() {


    return (
        <div className="flex flex-col justify-center items-center w-full -mt-24">
            <Swiper
                slidesPerView={4}
                loop={true}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    el: ".bulletsP",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    769: {
                        slidesPerView: 4,
                    },

                }}
                modules={[Navigation, Pagination, Autoplay]}
                className={`mySwiper
                    flex flex-col items-center justify-center w-full h-full pt-24 pb-44
                    z-1
                `}
            >
                {data[0].results.map((game) => (
                    <SwiperSlide
                        key={`slide-${game.id}`}
                        className={`
                            bg-transparent h-auto lg:h-[440px] px-4 md:px-0 group
                    `}>
                        <BannerCard 
                            key={game.id}
                            imageUrl={game.background_image}
                            title={game.name}
                            slug={game.slug}
                            id={game.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="w-full flex justify-center items-center -mt-40">
                <div className="bulletsP"></div>
            </div>
        </div>
    );
}
