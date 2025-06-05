"use client"

import { createContext, useState } from "react";

//--props das funcionalidades do contextp
interface ContextoMensagensProps {
    mensagens: string[];
    adicionarMensagem: (mensagem: string) => void;
    removerMensagem: (indice: number) => void;
}

//-- declaração do contexto definindo a interface 
export const ContextoMensagens = createContext<ContextoMensagensProps | undefined>(undefined)

//-- implementação do provider
export function MensagensProvider({ children }: any) {
    const [mensagens, setMensagens] = useState<string[]>([])

    function adicionarMensagem(mensagem: string) {
        setMensagens((mensagensAnteriores) => [...mensagensAnteriores, mensagem])
    }

    function removerMensagem(indice: number) {
        setMensagens((mensagensAnteriores) => {
            return [
                ...mensagensAnteriores.slice(0, indice),
                ...mensagensAnteriores.slice(indice + 1),
            ]
        })
    }

    // o seu retorno é um objeto
    return (
        <ContextoMensagens.Provider
            value={{ mensagens, adicionarMensagem, removerMensagem }}
        >
            {children}
        </ContextoMensagens.Provider>
    )
}