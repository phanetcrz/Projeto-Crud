interface IconeProps {
    tamanho?: number;
}

export function IconeEditar({ tamanho }: IconeProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={tamanho ?? 24}
            height={tamanho ?? 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-file-pen-line-icon lucide-file-pen-line"
        >
            <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
            <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            <path d="M8 18h1" />
        </svg>
    );
}


export function IconeDeletar({ tamanho }: IconeProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={tamanho ?? 24}
            height={tamanho ?? 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash2-icon lucide-trash-2"
        >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" />
        </svg>
    )
}

export function IconeCarteira({ tamanho }: IconeProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={tamanho ?? 24}
            height={tamanho ?? 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-wallet-icon lucide-wallet"
        >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
    )
}



//-- {tamanho ?? 24} quer dizer, se o tamanho não for informado, pegará o valor 24 como default

//-- site referencia dos icones
//   https://lucide.dev/icons/