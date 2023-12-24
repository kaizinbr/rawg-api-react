/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect, SetStateAction } from "react";
import { motion } from "framer-motion";
import ColorThief from 'colorthief';

interface BannerCardProps {
    imageUrl: string,
    title: string,
    slug: string,
    id: number,
}



export default function BannerCard({ imageUrl, title, slug, id }: BannerCardProps) {
    const imageRef = useRef<HTMLImageElement>(null);
    const [dominantColor, setDominantColor] = useState<number[]>([]);

    useEffect(() => {
        const colorThief = new ColorThief();
        const imageElement = imageRef.current;
        imageElement!.crossOrigin = 'Anonymous';

        if (imageElement) {
            const loadImage = async () => {
                const dominantColor = await getColorFromImage(imageElement, colorThief);
                setDominantColor(dominantColor);
            };

            loadImage();
        }
    }, []);

    const getColorFromImage = (image: HTMLImageElement, colorThief: ColorThief): Promise<number[]> => {
        return new Promise((resolve) => {
            image.addEventListener('load', () => {
                const dominantColor = colorThief.getColor(image);
                // console.log(dominantColor, 'dominantColor')
                resolve(dominantColor);
            });
        });
    };

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const imgStyle = {
        filter: isHovered ? 'brightness(1)' : 'brightness(.8)',
        boxShadow: isHovered ? `0px 0px 100px 0px rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 1)` : `0px 0px 100px 0px rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.5)`
    }

    return (
        <div
            className={`
                h-full md:min-h-[315px] w-full flex flex-col justify-center items-start rounded-xl z-50 transition-all duration-500 ease-in-out
                relative 
            `}

        >
            <Image
                className={`
                    h-full w-full flex flex-col justify-end items-center rounded-xl z-20 transition-all duration-500 ease-in-out
                    absolute 
                `}
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                    ...imgStyle
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                // onLoad={() => {
                //     console.log(imageRef.current?.src, 'loaded')
                // }}
                src={imageUrl}
                ref={imageRef}
                width={792}
                height={445}
                alt={title}
                priority={true}
            />
            <div className={`
                flex flex-col items-start justify-center text-left z-20
                h-full group-[.swiper-slide-active]:max-w-[50%] w-full pl-6 rounded-xl
                
                transition-all duration-500 ease-in-out delay-300
                gap-4
            `}
                style={{ backgroundImage: `linear-gradient(90deg, rgba(${dominantColor[0]},${dominantColor[1]},${dominantColor[2]},.5) 24%, rgba(255,0,0,0) 100%)` }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <h2
                    className={`
                        text-white text-base md:text-lg font-semibold
                        relative
                        transition-all duration-500 ease-in-out delay-300
                        md:group-[.swiper-slide-active]:text-2xl group-[.swiper-slide-active]:text-xl
                        opacity-0 group-hover:opacity-100 group-[.swiper-slide-active]:opacity-100
                    `}
                >{title}</h2>

                <div>
                    <div
                        className={`
                            text-white text-sm font-normal rounded-xl
                            flex items-center justify-center
                            bg-neutral-950/30 backdrop-blur-sm 
                            hover:bg-neutral-950/50    
                            transition-all duration-300 ease-in-out
                        `}
                    >
                        <Link 
                            href={`/games/${id}/${slug}`}
                            className={`
                                h-full w-full px-6 py-2 
                            `}
                        >
                            Ver detalhes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
