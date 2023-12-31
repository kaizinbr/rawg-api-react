import Index from '@/components/index/Index'
import Banner from '@/components/index/bannerCard/BConstructor'

export default function Home() {
// let data
//     const products = async () => {
//         data = await fetch("https://dummyjson.com/products/categories")
//             .then((res) => res.json())
//             .then((data) => console.log(data));
//     };
//     products();
    return (
        <div className={`
            flex flex-col items-center justify-center h-full w-full
            gap-20 col-span-12
        `}>
            {/* <Banner /> */}
            <Index />

        </div>
    )
}
