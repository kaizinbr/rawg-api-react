import Link from "next/link"
import BackButton from "@/components/BackButton"
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
            mx-8 GamePage
        `}>

            <div className={`
                flex items-center
                h-11 w-full
                fixed top-24 left-10
                z-40
            `}>
                <BackButton />
            </div>
            {children}
        </div>
    )
}