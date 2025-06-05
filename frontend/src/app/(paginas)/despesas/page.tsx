'use client'
import Tabela from "@/components/Tabela";
import Botao from "@/components/template/Botao";
import { useAutenticacao } from "@/hooks/useAutenticacao";
import { useRouter } from "next/navigation";


export default function Despesas() {

    const { logout, usuario } = useAutenticacao()
    const router = useRouter();

    return <div className="flex flex-col ">
        <div className="flex justify-end mb-4 items-center">
            {usuario && (
                <div className="text-2xl text-left flex-1 m-0 p-0 font-bold">
                    Despesas de {usuario?.nome} ({usuario?.email})
                </div>

            )}
            <Botao href="/despesas/criar"
                texto="Adicionar Despesa"
                className="mr-3 bg-blue-800/60 text-blue-200 hover:bg-blue-800"
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