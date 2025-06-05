import { ContextoAutenticacao } from "@/contexts/AutenticacaoContexto";
import { useContext } from "react";

export function useAutenticacao() {
    const contexto = useContext(ContextoAutenticacao)
    if (!contexto) {
        throw new Error('O hook useAutenticacao deve ser usado dentro do contexto de autenticação')
    }
    return contexto
}