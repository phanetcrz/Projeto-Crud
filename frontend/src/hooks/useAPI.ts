import { Despesa } from "@/model/Despesa"
import { CookieSessao } from "@/utils/CookieSessao"
import { Requisicao } from "@/utils/Requisicao"
import { useMensagens } from "./useMensagens"

export function useAPI() {
    const urlAPI = process.env.NEXT_PUBLIC_API_URL
    const urlBase = urlAPI?.endsWith("/") ? urlAPI.slice(0, -1) : urlAPI
    const endpointDespesas = `${urlBase}/despesas`
    const endpointAutenticacao = `${urlBase}/auth`


    const { adicionarMensagem } = useMensagens()

    const gerarHeader = () => ({
        "Authorization": `Bearer ${CookieSessao.pegarToken()}`
    })

    async function pegaErro<T>(promise: Promise<T>) {
        try {
            return await promise
        } catch (e: any) {
            adicionarMensagem(e.mensagem)
        }
    }

    async function obterTodos() {
        return pegaErro(Requisicao.get(endpointDespesas, gerarHeader()))

        // try {  modelo exemplo, de como era antes de mudar para a função pegaErro
        //     const dados = await Requisicao.get(endpointDespesas, gerarHeader())
        //     return dados
        // } catch (e: any) {
        //     console.error(e.mensagem)
        // }
    }

    async function obterPorId(id: string) {
        return pegaErro(Requisicao.get(`${endpointDespesas}/${id}`, gerarHeader()))
    }

    async function salvar(despesa: Despesa) {
        if (despesa.id) {
            return pegaErro(Requisicao.patch(`${endpointDespesas}/${despesa.id}`, despesa, gerarHeader()))
        }
        return pegaErro(Requisicao.post(endpointDespesas, despesa, gerarHeader()))
    }

    async function excluir(id: string) {
        return pegaErro(Requisicao.delete(`${endpointDespesas}/${id}`, gerarHeader()))
    }

    async function logar(email: string, senha: string) {
        return pegaErro(Requisicao.post(`${endpointAutenticacao}/logar`, {
            email, senha
        }))
    }

    async function cadastrar(nome: string, email: string, senha: string) {
        return pegaErro(Requisicao.post(`${endpointAutenticacao}/cadastrar`, {
            nome, email, senha
        }))
    }


    return { obterTodos, obterPorId, salvar, excluir, logar, cadastrar }
}

