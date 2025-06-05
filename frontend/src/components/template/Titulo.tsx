import { cn } from "@/utils/cn"
interface TituloProps {
    texto: string
    className?: string
}

export default function Titulo({ texto, className }: TituloProps) {
    return (<div className="mx-auto">
        <h2
            className={cn(
                "text-3xl font-bold tracking-tight",
                "text-gray-200 pb-8",
                className
            )}
        >
            {texto}
        </h2>
    </div>
    )
}