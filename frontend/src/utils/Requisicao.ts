/* eslint-disable-next-line */
type Body = Record<string, any>
type Headers = Record<string, string> //-- tipos genérivos aonde recebo chaves strings e valores strings

type RequisicaoProps = {
    metodo: "GET" | "POST" | "PATCH" | "DELETE",
    url: string
    body?: /*antes era any*/ Body
    headers?: /*antes era any*/ Headers
}

class ErroDoBackend extends Error {
    constructor(public mensagem: string) {
        super(mensagem)
    }
}

export class Requisicao {
    private static async generica({ metodo, url, body, headers }: RequisicaoProps) {
        try {
            const resposta = await fetch(url, {
                method: metodo,
                headers,
                body: JSON.stringify(body)
            })
            const dados = await resposta.json();

            if (dados.erro) {   //-- a propriedade erro é retornada do backend quando há um erro na resposta da requisição
                throw new ErroDoBackend(dados.erro.mensagem)
            }

            return dados
        } catch (e) {
            if (e instanceof ErroDoBackend) { //*verifica se é uma instancia de erro ErroDoBackend
                throw e
            }
            throw new Error(`Falha ao acessar a URL ${url}`)
        }
    }

    static async get(url: string, headers?: Headers) {
        return Requisicao.generica({
            metodo: "GET",
            url,
            headers
        })
    }

    static async post(url: string, body: Body, headers?: Headers) {
        return Requisicao.generica({
            metodo: "POST",
            url,
            body,
            headers: {
                "Content-Type": "application/json",
                ...headers   //**aqui vai o headers recebido por parametros
            },
        })
    }

    static async patch(url: string, body: Body, headers?: Headers) {
        return Requisicao.generica({
            metodo: "PATCH",
            url,
            body,
            headers: {
                "Content-Type": "application/json",
                ...headers
            }
        })
    }

    static async delete(url: string, headers?: Headers) {
        return Requisicao.generica({
            metodo: "DELETE",
            url,
            headers
        })
    }

}