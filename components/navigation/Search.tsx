"use client";
import React, { useState, useEffect, use } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const resize = () => {
        setIsExpanded(!isExpanded);
    };

    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            width: isExpanded ? 400 : 'auto',
        });
    });

    return (
        <motion.div
            onFocus={resize}
            onBlur={resize}
            className={`
                min-[800px]:flex flex-row items-center justify-end
                bg-neutral-500/20 border border-neutral-500/20 focus-within:shadow-lg 
                focus-within:shadow-emerald-700/20 rounded-md outline-none
                hidden transition-shadow duration-300 ease-in-out
            `}
            animate={controls}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
            }}
        >
            <input
                type="text"
                placeholder="Search"
                className={`
                    h-8 w-[calc(100%-16px)] pl-4 py-1 
                    bg-transparent outline-none
                `}
            />
            <button
                className={`
                    text-xl text-neutral-400 hover:text-emerald-200 transition-all
                    h-8 w-8 flex items-center justify-center pr-2
                `}
            >
                <IoSearch />
            </button>
        </motion.div>
    );
};

export default SearchBar;
