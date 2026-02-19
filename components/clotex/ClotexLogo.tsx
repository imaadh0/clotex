import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

const ClotexLogo = ({ className }: Props) => {
    return (
        <Link href={"/"} className={cn("text-2xl font-black tracking-tighter uppercase text-white", className)}>
            CLOTEX<span className="text-gray-500">.</span>
        </Link>
    );
};

export default ClotexLogo;
