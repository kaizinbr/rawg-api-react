


export default function CartLayout({
    children,
}: {
    children: React.ReactNode
}) {
    
    return (
        <div className={`
            flex flex-col
            m-auto cart max-w-6xl w-full
        `}>
            {children}
        </div>
    )
}