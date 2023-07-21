import Index from '@/components/index/Index'
import Banner from '@/components/index/bannerCard/BConstructor'

export default function Home() {
    return (
        <div className={`
            flex flex-col items-center justify-center h-full w-full
            gap-20 col-span-12
        `}>
            <Banner />
            <Index />

        </div>
    )
}
