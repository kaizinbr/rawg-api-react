// import { IoSearch } from "react-icons/io5";
// import { motion, useAnimation } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function SearchBar() {

//     const [inputValue, setInputValue] = useState('');
//     const formControls = useAnimation();
//     const setFormMaxWidth = (width: number) => {
//         formControls.start({ maxWidth: width });
//       };
//     //   useEffect(() => setInputValue(searchParams.get('search') || ''), []);

//     const searchVar = {
//         hidden: {
//             width: 400,
//         },
//         visible: {
//             width: 700,
//         }
//     }

//     return (
//         <motion.div
//             className={`
//                 flex flex-row items-center justify-center
//             `}
//             initial={{ maxWidth: 400 }}
//             animate={formControls}
//         // onSubmit={search}
//         >
//             <motion.input name="search" id="search" autoComplete="off" className={`
//                     h-8 w-64 px-4 py-2
//                     bg-neutral-800/70 backdrop-blur-3xl rounded-md outline-none
//                     border border-neutral-700 hover:border-neutral-500 transition-all
//                 `}
//                 type="text"
//                 placeholder="Search games..."
//                 // value={inputValue}
//                 variants={searchVar}
//                 // onChange={(e) => setInputValue(e.target.value)}
//                 whileFocus="visible"
//                 // onBlur={() => setFormMaxWidth(400)}
//             />
//             <button className={`
//                     h-8 w-8 ml-2 transition-all
//                 `}>
//                 <IoSearch className={`
//                         h-6 w-6 text-neutral-100
//                     `} />
//             </button>

//         </motion.div>

//     )
// }

// import { IoSearch } from "react-icons/io5";
// import { motion, useAnimation } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function SearchBar() {

//     const [inputValue, setInputValue] = useState('');
//     const formControls = useAnimation();
//     const setFormMaxWidth = (width: number) => {
//         formControls.start({ maxWidth: width });
//       };
//     //   useEffect(() => setInputValue(searchParams.get('search') || ''), []);

//     const searchVar = {
//         hidden: {
//             width: 400,
//         },
//         visible: {
//             width: 700,
//         }
//     }

//     return (
//         <motion.div
//             className={`
//                 flex flex-row items-center justify-center
//             `}
//             initial={{ maxWidth: 400 }}
//             animate={formControls}
//         // onSubmit={search}
//         >
//             <motion.input name="search" id="search" autoComplete="off" className={`
//                     h-8 w-64 px-4 py-2
//                     bg-neutral-800/70 backdrop-blur-3xl rounded-md outline-none
//                     border border-neutral-700 hover:border-neutral-500 transition-all
//                 `}
//                 type="text"
//                 placeholder="Search games..."
//                 // value={inputValue}
//                 variants={searchVar}
//                 // onChange={(e) => setInputValue(e.target.value)}
//                 whileFocus="visible"
//                 // onBlur={() => setFormMaxWidth(400)}
//             />
//             <button className={`
//                     h-8 w-8 ml-2 transition-all
//                 `}>
//                 <IoSearch className={`
//                         h-6 w-6 text-neutral-100
//                     `} />
//             </button>

//         </motion.div>

//     )
// }
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
            width: isExpanded ? 420 : 256,
        });
    });

    return (
        <motion.div
            onFocus={resize}
            onBlur={resize}
            className={`flex flex-row items-center justify-center`}
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
                    h-8 px-4 py-2 w-4/5
                    bg-neutral-300/10 border border-neutral-500/20 rounded-md outline-none
                    transition-all
                `}
                // style={{
                //     border: 'none',
                //     outline: 'none',
                //     background: 'transparent',
                //     width: '80%',
                //     fontSize: 16,
                //     paddingLeft: 10,
                // }}
            />
            <button
                className={`
                    h-8 w-8 ml-2 transition-all
                `}
            >
                <IoSearch
                    className={`
                        h-5 w-5 text-neutral-400 hover:text-neutral-200 transition-all
                    `}
                />
            </button>
        </motion.div>
    );
};

export default SearchBar;
