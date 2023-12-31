import CartPage from "@/components/cart/CartPage";
import CheckoutPage from "@/components/cart/checkout/CheckoutPage";
import GameApp from "@/components/index/gamePage/GamePageIndex";
import data from "@/data/gameData.json";

export async function generateMetadata({
    params,
}: {
    params: {  };
}) {
    return {
        title: "Carrinho",
        description: "A game page",
        slug: 'cart',
    };
}

export default function Game({ params }: { params: { games: string[] } }) {
    // const id: number = +params.games[0];
    // console.log(id);



    return (
        <div className="w-full">
            <CheckoutPage />
        </div>
    );
}
