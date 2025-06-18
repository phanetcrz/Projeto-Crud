"use client"
import { AutenticacaoProvider } from "@/contexts/AutenticacaoContexto";
import { useAutenticacao } from "@/hooks/useAutenticacao";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

//export default function Layout({ children }: any) {
export default function Layout({ children }: { children: ReactNode }) {
    return (
        <AutenticacaoProvider>
            <ValidaUsuarioLogado>{children}</ValidaUsuarioLogado>
        </AutenticacaoProvider>
    );
}

//--validação p verificar se o usuário está logado, para não deixar navegar pelas páginas e causar erros
//-- que é a proteção de rotas
//function ValidaUsuarioLogado({ children }: any) {
function ValidaUsuarioLogado({ children }: { children: ReactNode }) {
    const { temUsuarioLogado } = useAutenticacao();
    const router = useRouter();

    useEffect(() => {
        if (!temUsuarioLogado()) {
            router.push("/");
        }
    }, []);

    return children;
}