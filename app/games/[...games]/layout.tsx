import Link from "next/link"
import BackButton from "@/components/navigation/BackButton"
import "./globals.css";
import "@/components/index/gamePage/gamePageStyle.css"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    
    return (
        <div className={`
            flex flex-col
            mx-4 lg:mx-8 GamePage
        `}>

            <div className={`
                flex items-center
                h-11 top-6
                fixed md:top-24 lg:left-10
                z-40
            `}>
                <BackButton />
            </div>
            {children}
        </div>
    )
}