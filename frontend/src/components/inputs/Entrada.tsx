import { cn } from "@/utils/cn"

interface EntradaProps {
    tipo?: "text" | "number" | "date" | "password" | "email"
    texto: string
    valor: any
    setValor?: any
    nome: string
    className?: string
    somenteLeitura?: boolean
}

export default function Entrada(props: EntradaProps) {
    const { tipo, texto, valor, setValor, nome, className, somenteLeitura } = props  //--Processo de desestruturação.

    return (<div className={cn("flex flex-col text-sm", className)}>
        <label className="mb-2" htmlFor={nome}>{texto}</label>
        <input
            type={tipo ?? "text"}
            value={valor}
            name={nome}
            readOnly={somenteLeitura}
            onChange={(e) => setValor?.(e.target.value)}
            className={cn(
                "rounded-lg b bg-neutral-700 px-4 py-2 mb-2",
                "border-2 border-zinc-800 focus:outline-none",
                {
                    "focus:border-blue-700": !somenteLeitura,
                    "bg-neutral-700 text-neutral-500": somenteLeitura
                }
            )}
        ></input>
    </div>
    );
}

/*a constante nome é utilizada tando no label quando no input para fazer assossiação dos camponentes */
/* O controle do estado do componente é feito no Formulario.tsx */