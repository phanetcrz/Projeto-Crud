'use client'
import Tabela from "@/components/Tabela";
import Botao from "@/components/template/Botao";
import { useAutenticacao } from "@/hooks/useAutenticacao";
import { useRouter } from "next/navigation";


export default function Despesas() {

    const { logout, usuario } = useAutenticacao()
    const router = useRouter();

    return <div className="flex flex-col ">
        <div className="flex flex-col md:flex-row justify-end mb-4 md:items-center">
            {usuario && (
                <div className="text-2xl text-center md:text-left flex-1 m-2 p-0 font-bold">
                    Despesas de {usuario?.nome} ({usuario?.email})
                </div>
            )}
            <Botao href="/despesas/criar"
                texto="Adicionar Despesa"
                className="md:mr-3 bg-blue-800/60 text-blue-200 hover:bg-blue-800"
            />
            <Botao
                texto="Logout"
                className="bg-red-800/60 text-red-200 hover:bg-red-800 cursor-pointer"
                onClick={() => {
                    logout();
                    router.push("/")
                }}
            />
        </div>
        <Tabela />
    </div>
}