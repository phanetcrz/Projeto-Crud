'use client'

import Entrada from "@/components/inputs/Entrada";
import Botao from "@/components/template/Botao";
import Titulo from "@/components/template/Titulo";
import { useEffect, useState } from "react";
import { useAutenticacao } from "@/hooks/useAutenticacao";
import { useRouter } from "next/navigation";


export default function Home() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [registrar, setRegistrar] = useState(false)
  const { usuario, login, cadastro } = useAutenticacao();
  const router = useRouter();

  useEffect(() => {
    if (usuario?.token) {
      router.push('/despesas')
    }
  }, [usuario])

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="px-5 py-6 md:p-8 bg-neutral-800 rounded-xl w-11/12 max-w-md m-5">
        <Titulo texto={registrar ? "Registrar" : "Logar"} className="pb-4 text-center" />
        {registrar && (<Entrada
          texto="Nome"
          nome="nome"
          valor={nome}
          setValor={setNome}
          className="mb-4"
        />)}
        <Entrada
          texto="Email"
          nome="email"
          valor={email}
          setValor={setEmail}
          tipo="email"
          className="mb-4"
        />
        <Entrada
          texto="Senha"
          nome="senha"
          valor={senha}
          setValor={setSenha}
          tipo="password"
          className="mb-4"
        />
        <Botao className="w-full py-2 "
          texto={registrar ? "Registrar" : "Entrar"}
          onClick={async () => {
            const fn = () => registrar ? cadastro(nome, email, senha) : login(email, senha);  // tanto cadastro quanto login retornam booleano, pois cadastro retorna login
            const sucesso = await fn()

            if (sucesso) {
              router.push("/despesas")
            }
          }}
        />
        <Botao className="w-full py-2 "
          texto={registrar ? "Já tem conta?" : "Não tem conta?"}
          onClick={() => { setRegistrar(!registrar) }}
        />
      </div>
    </div>
  );
}
