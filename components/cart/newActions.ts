"use server";

import { cookies } from "next/headers";

import { createCart, getCart } from "@/lib/shopify";

export async function create(prevState: any, gameId: string | undefined) {
    cookies().set("name", "lee");
    // or
    cookies().set("name", "lee", { secure: true });
    // or
    cookies().set({
        name: "name",
        value: "lee",
        httpOnly: true,
        path: "/",
    });

    console.log(cookies().get("name")?.value);

    let cartId = cookies().get("cartId")?.value;
    let cart;
    


    if (cartId) {
        cart = await getCart(cartId);
    }

    if (!cartId || !cart) {
        cart = await createCart();
    console.log('veio aqui')
        cartId = cart.id;
        cookies().set("cartId", cartId);
    }

    // if (!gameId) {
    //     return "Missing product variant ID";
    // }

    // try {
    //     console.log(cartId)
    //     // await addToCart(cartId, [
    //     //     { merchandiseId: gameId, quantity: 1 },
    //     // ]);
    //     // revalidateTag(TAGS.cart);
    // } catch (e) {
    //     return "Error adding item to cart";
    // }
}


