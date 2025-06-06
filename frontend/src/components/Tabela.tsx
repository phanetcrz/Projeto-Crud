"use client";

import { Despesa } from "@/model/Despesa";
import { IconeDeletar, IconeEditar } from "./Icones";
import Link from "next/link";
import { formatarParaBRL } from "@/utils/formatar";
import { useAPI } from "@/hooks/useAPI";
import { useEffect, useState } from "react";
import Loader from "./template/Loader";

export default function Tabela() {
    const { obterTodos, excluir } = useAPI();
    const [despesas, setDespesas] = useState<null | any[]>(null)

    useEffect(() => {
        obterTodos().then((dados) => {
            if (dados) {
                setDespesas(dados);
            }
        })
    }, [])

    if (despesas === null) {   /*Enquando a despesas for nulo ele executa o loader */
        return <Loader />
    }

    function acoes(id: string) {
        return (<td className="md:flex md:justify-center py-2">
            <button className={`
             rounded-full m-1 p-1
            text-green-600/60 hover:text-green-600
            `}>
                <Link href={`/despesas/editar/${id}`}>
                    <IconeEditar tamanho={24} />
                </Link>
            </button>

            <button
                className={`
             rounded-full m-1 p-1 cursor-pointer
            text-red-600/60 hover:text-red-600
            `}
                onClick={async () => {
                    await excluir(id)
                    setDespesas(despesas!.filter((d: Despesa) => d.id !== id));  //despesas! a "!" quer dizer que, eu estou afirmando que a despesas nessa situação nunca será nula.
                }}                                                               //explicação do filter na ultima linha deste tsx

            >
                <IconeDeletar tamanho={24} />
            </button>
        </td>)
    }
    return (
        <div className="overflow-x-scroll md:overflow-hidden">
            <table className="w-full  max-w-full">
                <thead>
                    <tr className="text-center text-lg border-b border-neutral-500 text-gray-300">
                        <th className="p-4">ID</th>
                        <th className="p-4">Descrição</th>
                        <th className="p-4">Data</th>
                        <th className="p-4 text-right">Valor</th>
                        <th className="p-4">Pago</th>
                        <th className="p-4">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {despesas.map((despesa: Despesa) => {
                        return (
                            <tr key={despesa.id} className="text-center border-b border-neutral-500 text-gray-300">
                                <td className="p-4">{despesa.id}</td>
                                <td className="p-4">{despesa.descricao}</td>
                                <td className="p-4">{new Date(despesa.data).toLocaleDateString("pt-BR")}</td>
                                <td className="p-4 text-right">{formatarParaBRL(despesa.valor)}</td>
                                <td className="p-4">{despesa.pago ? "Sim" : "Não"}</td>
                                {acoes(despesa.id!)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

/*
Table - definição da tabela
thead - cabeçalho da tabela
tr - linhas da tabela que são representadas pelas tr
th - textos dos cabeçalhos da tabela, os header
tbory - corpo da tabela

{acoes(despesa.id!)}  ter colocano o sinal ! para esse caso, quero dizer que aqui sempre eu terei um ID, então estou afirmando que sempre terá valor

para formatar valor, pode ser usado desta forma despesa.valor.toFixed(2)



filter:  setDespesas(despesas!.filter((d: Despesa) => d.id !== id)); 
1- Você tem um array de despesas (que você garantiu não ser nulo com o !).
2- Para cada despesa (d) nesse array, o filter() vai verificar a condição d.id !== id.
3- Se o id da despesa atual (d.id) for diferente do id que você quer remover, então essa despesa (d) será mantida no novo array.
4- Se o id da despesa atual (d.id) for igual ao id que você quer remover, então essa despesa (d) será descartada e não fará parte do novo array.

*/

/*
overflow-x-scroll - 
A classe overflow-x-scroll no Tailwind CSS é usada para controlar como o conteúdo que excede os limites horizontais de um elemento deve ser tratado
*/