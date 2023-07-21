"use client";
import React, { useState, useEffect } from "react";
import Feed from "../../components/index/Feed copy";
import { cardSpacing, contentSpacing, cardWidth } from "../../services/calcColumns";
import { useWindowWidth } from '@react-hook/window-size';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Banner from "@/components/index/bannerCard/BConstructor";
import Index from "@/components/index/Index";

const Teste = () => {

    const [columnsCount, setColumnsCount] = useState(1);
    const windowWidth = useWindowWidth();

    useEffect(() => {
        setColumnsCount(Math.floor(windowWidth / cardWidth) || 1);
    }, [windowWidth]);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setColumnsCount(Math.floor(windowWidth / cardWidth) || 1);
        })
    })
    
    return (
        <div className={`
            flex flex-col items-center justify-center h-full w-full
            gap-20
        `}>
            <Banner />

            {/* <div className="py-56">
                <h1 className="text-5xl text-red-500">Teste de cor</h1>
            </div> */}

            <Index />

        </div>
    );
}

export default Teste;