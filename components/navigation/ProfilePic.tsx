import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

// export default function ProfilePic({ imageUrl, size, className }: any) {
    export default function ProfilePic() {
    return (
        
                <div
                    className={`
                    h-8 w-8 rounded-full bg-neutral-200
                `}
                >
                    <Image
                        src="/pfp.jpeg"
                        alt="profile pic"
                        width={32}
                        height={32}
                        className={`
                        h-full w-full rounded-full
                    `}
                    />
                </div>
    )
}