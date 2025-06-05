import { cn } from "@/utils/cn";

export default function Loader() {
    return (
        <div className="flex flex-col justify-center items-center min-h-28 p-20">
            <div className={cn(
                "w-14 h-14",
                "border-8 border-gray-300 border-t-blue-500",
                "rounded-full animate-spin"
            )}
            ></div>
            <span className="mt-3 animate-pulse">carregando</span>
        </div>
    )
}