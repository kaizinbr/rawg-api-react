"use client";

import { it } from "node:test";
import { useEffect, useReducer } from "react";
import { BiTrash } from "react-icons/bi";
import removeFromCart from "@/services/rmFromCart";

export default function RmFromCartBtn({ gameId, setAutodeletes, setItemsLength }: { gameId: string, setAutodeletes: any, setItemsLength: any }) {
    function getStoredCartItems() {
        if (typeof window !== "undefined") {
            const storedCartItems = localStorage.getItem("cartItems");
            if (storedCartItems !== null) {
                try {
                    const cartItems = JSON.parse(storedCartItems);
                    // console.log(cartItems);
                    return cartItems;
                } catch (error) {
                    console.error(error);
                }
            }
        }
        return [];
    }

    function cartReducer(state: any, action: any) {
        switch (action.type) {
            case "REMOVE_FROM_CART":
                setAutodeletes(true);
                return {
                    ...state,
                    cartItems: state.cartItems.filter(
                        (item: any) => item.id !== action.payload.id,
                        (item: any) => console.log(item)
                    ),
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(cartReducer, {
        cartItems: getStoredCartItems(),
    });

    function handleRemoveFromCart(gameId: any) {
        console.log('Removendo jogo de ID: ' + gameId);
        removeFromCart(gameId)
        setAutodeletes(true)
    }

    useEffect(() => {
        if (state.cartItens !== null) {
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            setItemsLength(state.cartItems.length)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        // <form action={actionWithVariant}>
        <button
            onClick={() => handleRemoveFromCart(gameId)}
            className={`flex flex-row justify-center items-center
                        bg-emerald-500 rounded-md py-2 px-4
                        row-span-2 row-start-3
                        hover:bg-emerald-600 transition duration-200
                    `}
        >
            <h3 className="text-xl font-semibold text-white">
            <BiTrash />
            </h3>
        </button>
        // </form>
    );
}
