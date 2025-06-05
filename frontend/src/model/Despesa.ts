export interface Despesa {
    id: string | undefined;
    descricao: string;
    data: string;
    valor: number;
    pago: boolean;
}