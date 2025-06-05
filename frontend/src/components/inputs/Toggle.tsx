import { cn } from "@/utils/cn";

interface ToggleProps {
    texto: string;
    valor: boolean;
    setValor: any
}

export default function Toggle({ texto, valor, setValor }: ToggleProps) {
    return (<div className="flex items-center gap-2 my-y text-lg ">
        <span>{texto}</span>
        <div className={cn(
            "relative w-12 h-6 flex-shrink-o cursor-pointer rounded-full",
            {
                "bg-blue-500": valor,
                "bg-neutral-600": !valor,
            }
        )}
            onClick={() => setValor(!valor)} /*se está falso vai ficar verdadeiro e se estiver verdadeiro vai fica falso */
        >
            <div className={cn(
                "absolute top-0.5 left-0.5 w-5 h-5 rounded-full",
                "shadow-md transform transition-transform bg-white",
                {
                    "translate-x-6": valor
                }
            )}></div>
        </div>
    </div>
    )
}


/* O controle do estado do componente é feito no Formulario.tsx */

/* shadow-md transform transition-transform  = faz o movimento da transição */