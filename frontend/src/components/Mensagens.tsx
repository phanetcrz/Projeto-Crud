"use client"
import { cn } from "@/utils/cn"
import Botao from "./template/Botao"
import { useMensagens } from "@/hooks/useMensagens"

export default function Mensagens() {

    const { mensagens, removerMensagem } = useMensagens()

    return (
        <div className="fixed top-4 right-4 w-80 z-50">
            <ul className="space-y-2 bg-transparent">
                {mensagens.map((m, index) => {
                    return (
                        <li key={index}
                            className={cn(
                                "bg-red-500 text-white",
                                "flex justify-between items-center",
                                "p-3 rounded"
                            )}
                        >
                            <span>{m}</span>
                            <Botao
                                texto="X"
                                onClick={() => {
                                    removerMensagem(index)
                                }}
                                className={cn(
                                    "ml-4 py-1 px-2 rounded",
                                    "bg-red-700 hover:bg-red-800",
                                    "text-white font-bold"
                                )}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}