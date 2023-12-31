"use client";
import { useRouter } from 'next/navigation'
import { BsArrowLeft } from "react-icons/bs"
import { motion } from "framer-motion";

export default function BackButton() {

    const router = useRouter()

    return (
        <motion.button 
            className={`
                text-2xl text-white cursor-pointer 
                flex items-center justify-center
                py-2 px-3 rounded-full bg-neutral-800/70 border-neutral-700/10 backdrop-blur-2xl hover:bg-neutral-700
                z-40 h-12 w-12
            `}
            type="button"
            onClick={() => router.back()}
            whileHover={{ scale: 1.1 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
            }}
        >
            <BsArrowLeft 
                className={`
                    text-2xl text-white cursor-pointer 
                `}
             />
        </motion.button>
    )
}