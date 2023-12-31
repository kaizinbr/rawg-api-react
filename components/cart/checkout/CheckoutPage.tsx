"use client";

import { useState, useEffect } from "react";
import fetchGameDetails from "@/services/fetchGameOnCart";
import { getCartItems } from "@/services/getCart";
import CartCard from "../CartCard";
import { AnimatePresence, motion } from "framer-motion";
import ImgBox from "./imgBox";
import { getMaxAge } from "next/dist/server/image-optimizer";

export default function CheckoutPage() {
    const [cartItems, setCartItems] = useState<any>([]);
    const [itemsLenght, setItemsLength] = useState<any>(0);

        // setCartItems(getCartItems());

    useEffect(() => {
        const Lalalala = getCartItems()
        setCartItems(Lalalala);
        // console.log(Lalalala.slice(0,3));
    }, []);

    return (
        <div
            className={`
            flex flex-col
            m-auto w-full
        `}
        >
            <h1 className="text-4xl mb-8">Seu carrinho</h1>
            <div
                className={`
                flex flex-row
            `}
            >
                <div className={`
                    flex flex-col
                    grow
                `}>

                    <div
                        className={`
                            flex flex-col gap-6
                        `}
                    >
                        <div
                            className={`
                                flex flex-col                            
                            `}
                        >
                            <h3 className="text-2xl mb-4">Informe seu e-mail para receber os jogos</h3>
                            <input type="email" className={`
                                w- max-w-sm h-12 bg-neutral-800 text-white rounded-lg
                                focus:outline-none
                                px-4
                        
                            `} />
                        </div>
                        <div
                            className={`

                            `}
                        >
                            <h3 className="text-3xl">Forma de pagamento</h3>
                        </div>
                    </div>
                    <div
                        className={`
                            flex flex-col
                            grow gap-4
                        `}
                    >
                        <h3 className="text-2xl">Você receberá</h3>
                            {cartItems.map((game: any, i: any) => {
                                return <span key={i}>{game.name}</span>;
                            })}

                        {/* {itemsLenght === 0 && (
                            <h1 className="text-3xl mb-8">No games in cart</h1>
                        )} */}
                    </div>
                </div>
                <div
                    className={`
                        w-72 ml-6 flex-none
                    `}
                >
                    <div
                        className={`
                    
                    `}
                    >
                        <div
                            className={`
                                mb-4
                            `}
                        >
                            <h3 className="text-3xl">Resumo de jogos</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div
                                className={`
                                    flex flex-row justify-between
                                `}
                            >
                                <h3 className="">Subtotal</h3>
                                <h3 className="">R$ {(itemsLenght * 69.99).toLocaleString('pt-BR')}</h3>
                            </div>
                            <div
                                className={`
                                    flex flex-row justify-between
                                `}
                            >
                                <h3 className="">Taxas</h3>
                                <h3 className="">R$ 304,86</h3>
                            </div>
                            <div
                                className={`
                                    flex flex-row justify-between
                                `}
                            >
                                <h3 className="">Descontos</h3>
                                <h3 className="">-</h3>
                            </div>
                            <div
                                className={`
                                    flex flex-row justify-between
                                    mt-2 border-t border-neutral-700 pt-4
                                `}
                            >
                                <h3 className="text-xl">Total</h3>
                                <h3 className="text-xl">R$ {(itemsLenght * 69.99 + 304.86).toLocaleString('pt-BR')}</h3>
                            </div>
                        </div>
                        <div
                            className={`
                                mt-4
                            `}
                        >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
