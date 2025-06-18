import { IconeCarteira } from "@/components/Icones";
import { ReactNode } from "react";

// export default function Layout({ children }: any) { antes da eliminação do any
export default function Layout({ children }: { children: ReactNode }) {
    return (<div>
        <header className="flex justify-center items-center gap-4 py-10 text-gray-200">
            <IconeCarteira tamanho={50} />
            <span className="text-2xl font-bold">DESPESAS</span>
        </header>
        <main className="max-w-7xl w-11/12 mx-auto my-5 p-5 bg-neutral-800 rounded-lg">
            {children}
        </main>
    </div>
    )
}