export function getCartItems(): any[] {
    if (typeof window !== "undefined") {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems !== null) {
            try {
                const cartItems = JSON.parse(storedCartItems);
                console.log(cartItems);
                return cartItems;
            } catch (error) {
                console.error(error);
            }
        }
    }
    return [];
}
