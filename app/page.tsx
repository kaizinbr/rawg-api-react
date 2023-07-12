import Index from '@/components/index/Index'
import Banner from '@/components/index/bannerCard/BConstructor'

export default function Home() {
    return (
        <main className={`
            flex flex-col items-center justify-center h-full w-full
            gap-20
        `}>
            <Banner />
            <Index />

        </main>
    )
}
