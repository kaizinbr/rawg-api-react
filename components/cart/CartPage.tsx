"use client";

import { useState, useEffect } from "react";
import CartCard from "./CartCard";
import fetchGameDetails from "@/services/fetchGameOnCart";
import RmFromCartBtn from "./RmFromCartBtn";

import { AnimatePresence, motion } from "framer-motion";
import CheckoutBtn from "./CheckoutBtn";

export default function CartPage() {
    const [cartItems, setCartItems] = useState<any>([]);
    const [itemsLenght, setItemsLength] = useState<any>(0);

    function getStoredCartItems() {
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem("cartItems");
            if (storedCartItems !== null) {
                try {
                    const cartItems = JSON.parse(storedCartItems);
                    return cartItems;
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return [];
    }

    useEffect(() => {
        const Lalalala =
            localStorage.getItem("cartItems") ?? ""
                ? JSON.parse(localStorage.getItem("cartItems") ?? "")
                : [];
        setCartItems(Lalalala);
        setItemsLength(Lalalala.length);
    }, []);

    return (
        <div
            className={`
            flex flex-col
            m-auto w-full  
            xl:px-0 px-12
        `}
        >
            <h1 className="text-4xl mb-8">Seu carrinho</h1>
            <div
                className={`
                flex lg:flex-row flex-col
                w-full gap-y-16
            `}
            >
                <div
                    className={`
                        flex flex-col
                        grow gap-6
                    `}
                >
                    <AnimatePresence>
                        {cartItems.map((game: any, i: any) => {
                            return <CartCard key={i} gameId={game.id} setItemsLength={setItemsLength} />;
                        })}
                    </AnimatePresence>

                    {itemsLenght === 0 && (
                        <h1 className="text-3xl mb-8">No games in cart</h1>
                    )}
                </div>
                <div
                    className={`
                        lg:w-72 w-full lg:ml-6 flex-none
                        flex flex-col justify-between
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
                            <CheckoutBtn />
                            {/* <RmFromCartBtn /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
