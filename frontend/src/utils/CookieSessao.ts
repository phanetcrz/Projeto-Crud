import Usuario from '@/model/Usuario'
import cookie from 'js-cookie'

export class CookieSessao {
    private static readonly NOME_COOKIE = 'usuarioLogado'

    private static criar(valor: string) {
        cookie.set(this.NOME_COOKIE, valor, {
            expires: 1,
            sameSite: 'None',
            secure: true
        })
    }

    static pegar() {
        const dados = cookie.get(this.NOME_COOKIE)
        if (dados) {
            return JSON.parse(dados)
        }
        return null
    }

    static pegarToken() {
        const dados = CookieSessao.pegar()
        return dados !== null ? dados.token : null
    }

    static limpar() {
        return cookie.remove(this.NOME_COOKIE)
    }

    static gerenciar(usuario: Usuario | null) {
        if (usuario) {
            CookieSessao.criar(JSON.stringify(usuario))
        } else {
            CookieSessao.limpar()
        }
    }
}

/*
private static - significa que a função é privada e só pode ser utilizada dentro da própria classe
apenas static - significa que pode pode externar a função para ser utilizada fora da classe, porem com a chamada CookieSessao.pegar


*/