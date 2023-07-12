import Link from "next/link"
import BackButton from "@/components/BackButton"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`
            flex flex-col
            mx-8
        `}>
            <div>
                <BackButton />
            </div>
            {children}
        </div>
    )
}