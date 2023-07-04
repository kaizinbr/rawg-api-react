"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

export default function App() {

    const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5", "Slide 6", "Slide 7", "Slide 8", "Slide 9"];

    return (
        <>
            <Swiper
                slidesPerView={4}
                loop={true}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                // centeredSlides={true}
                // navigation={true}
                autoplay={{ 
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className={`mySwiper
                flex flex-col items-center justify-center h-[400px] w-full 
                z-1
                `}
            >
                {/* {slides.map((slideContent) => (
                    <SwiperSlide
                        key={`slide-${slideContent}`}
                        className={`
                        h-full w-[650px] bg-emerald-400 mb-4 rounded-md   
                        `}
                    >
                        {slideContent}
                    </SwiperSlide>
                ))} */}

                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 1
                    {/* <div className="chart"></div> */}
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 2
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 3
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 4
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 5
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 6
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 7
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 8
                </SwiperSlide>
                
                <SwiperSlide className={`
                    bg-emerald-400 rounded-xl
                `}>
                    Slide 9
                </SwiperSlide>
                
                
            </Swiper>
        </>
    );
}
