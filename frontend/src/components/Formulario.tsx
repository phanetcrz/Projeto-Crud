'use client'

import { useEffect, useState } from "react"
import Entrada from "./inputs/Entrada";
import { Despesa } from "@/model/Despesa";
import Toggle from "./inputs/Toggle";
import Botao from "./template/Botao";
import { useRouter } from "next/navigation";
import { useAPI } from "@/hooks/useAPI";
import Loader from "./template/Loader";

interface FormularioProps {
    id?: string;
}

export default function Formulario({ id }: FormularioProps) {
    const valorInicial = id ? null : ({
        id: undefined,
        data: new Date().toLocaleDateString("en-CA"),
        descricao: "",
        pago: false,
        valor: 0
    })

    const [despesa, setDespesa] = useState<Despesa | null>(null);
    const router = useRouter()
    const { salvar, obterPorId } = useAPI()

    useEffect(() => {
        if (id) {
            obterPorId(id).then((d: Despesa) => setDespesa({
                ...d,
                data: new Date(d.data).toLocaleDateString("en-CA")
            }));
        } else
            setDespesa(valorInicial)
    }, [])

    if (id && despesa === null) {
        return <Loader />
    }

    if (despesa === null) return <div>Houve um problema</div>

    //formato da data  yyyy-mm-dd
    function handleChange(campo: string, valor: any) {
        setDespesa((antigo: any) => ({ ...antigo, [campo]: valor }))
    }

    return (
        <div className="flex flex-col gap-3">
            {id &&
                <Entrada somenteLeitura={true}
                    nome="id"
                    valor={id}
                    texto="Id"
                />}
            <Entrada
                nome="descrição"
                texto="Descrição"
                valor={despesa.descricao}
                setValor={(valor: any) => handleChange("descricao", valor)}
            />
            <Entrada
                nome="data"
                texto="Data"
                valor={despesa.data}
                tipo="date"
                setValor={(valor: any) => handleChange("data", valor)}
            />
            <Entrada
                nome="valor"
                texto="Valor"
                valor={despesa.valor}
                tipo="number"
                setValor={(valor: any) => handleChange("valor", parseFloat(valor))} //convertendo string para float
            />
            <Toggle
                texto="Pago?"
                valor={despesa.pago}
                setValor={(valor: any) => handleChange("pago", valor)}
            />
            <div className="flex justify-end">
                <Botao className="mr-2 cursor-pointer w-26"
                    texto={id ? "Alterar" : "Salvar"}
                    onClick={async () => {
                        const sucesso = await salvar(despesa)
                        if (sucesso) {
                            router.push('/despesas')
                        }
                    }
                    }
                />
                <Botao href="/despesas" texto="Cancelar" />
            </div>
        </div>
    )
}

/* inicia o fomulário preenxendo os campos
    const [despesa, setDespesa] = useState<Despesa>({
        id: undefined,
        data: new Date().toLocaleDateString("en-CA"),
        descricao: "",
        pago: false,
        valor: 0
    })
*/
