'use client'

import Formulario from "@/components/Formulario";
import Titulo from "@/components/template/Titulo";
import { useParams } from "next/navigation"

export default function Editar() {
    const { id } = useParams();

    return (<>
        <Titulo texto={`Editando ${id}`} />
        <Formulario id={id?.toString()} />
    </>
    )
}