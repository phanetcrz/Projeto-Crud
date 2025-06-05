import { cn } from "@/utils/cn";
import Link from "next/link";

interface BotaoProps {
    texto: string;
    className?: string;
    onClick?: any;
    href?: string;
}

export default function Botao({ texto, className, onClick, href }: BotaoProps) {

    const LinkHref = () => {
        return (
            <Link href={href!} className="w-full h-full px-4 py-2 block">
                {texto}
            </Link>
        )
    }

    return (
        <button
            onClick={onClick}
            className={cn(
                "bg-blue-700 text-white hover:bg-blue-800",
                {
                    "px-4 py-2": !href  //* Se não for href enão ele faz essa configuração
                },
                "rounded-md my-2 text-lg", className
            )}>
            {href ? <LinkHref /> : texto}
        </button>)
}