import Index from '@/components/index/Index'
import App from '@/components/index/Banner'

export default function Home() {
    return (
        <main className={`
            flex flex-col items-center justify-center h-full w-full
            gap-20
        `}>
            <App />
            <Index />

        </main>
    )
}
