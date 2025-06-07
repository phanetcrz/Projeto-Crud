'use client'

import Usuario from "@/model/Usuario"
import { CookieSessao } from "@/utils/CookieSessao"
import { createContext, useEffect, useState } from "react"
import { useAPI } from "@/hooks/useAPI"

interface ContextoProps {
    usuario: Usuario | null;
    logout: () => void
    login: (email: string, senha: string) => Promise<boolean>  //**Usa-se "Promise" pq funções assincronas retornam promisses */
    cadastro: (nome: string, email: string, senha: string) => any
    temUsuarioLogado: () => boolean
}

export const ContextoAutenticacao = createContext<ContextoProps | undefined>(undefined)

export function AutenticacaoProvider({ children }: any) {
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const { logar, cadastrar } = useAPI()

    useEffect(() => {
        const usuario = CookieSessao.pegar()
        setUsuario(usuario);
    }, [])

    function temUsuarioLogado() {
        const usuario = CookieSessao.pegar();
        return usuario && !!usuario.token //--!! converte o valor para boolean, se tem valor é true, caso contrário falso
    }

    async function login(email: string, senha: string) {   //**funções assincronas retornam promisses */
        const usuario = await logar(email, senha);

        if (usuario?.token) {
            CookieSessao.gerenciar(usuario); //--adiciona os dados do usuário no cookies 
            setUsuario(usuario)
        }

        return !!usuario?.token    /* o !! converte para booleano, ex: tem valor = true caso não é falso*/
    }

    async function cadastro(nome: string, email: string, senha: string) {
        const dados = await cadastrar(nome, email, senha)
        if (dados.email) {
            return login(email, senha)
        }
    }

    function logout() {
        CookieSessao.limpar()
        setUsuario(null)
    }

    return (
        <ContextoAutenticacao.Provider
            value={{
                usuario,
                logout,
                login,
                cadastro,
                temUsuarioLogado
            }}>
            {children}
        </ContextoAutenticacao.Provider>
    )
}