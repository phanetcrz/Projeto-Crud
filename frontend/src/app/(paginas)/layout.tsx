"use client"
import { AutenticacaoProvider } from "@/contexts/AutenticacaoContexto";
import { useAutenticacao } from "@/hooks/useAutenticacao";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }: any) {
    return (
        <AutenticacaoProvider>
            <ValidaUsuarioLogado>{children}</ValidaUsuarioLogado>
        </AutenticacaoProvider>
    );
}

//--validação p verificar se o usuário está logado, para não deixar navegar pelas páginas e causar erros
//-- que é a proteção de rotas
function ValidaUsuarioLogado({ children }: any) {
    const { temUsuarioLogado } = useAutenticacao();
    const router = useRouter();

    useEffect(() => {
        if (!temUsuarioLogado()) {
            router.push("/");
        }
    }, []);

    return children;
}