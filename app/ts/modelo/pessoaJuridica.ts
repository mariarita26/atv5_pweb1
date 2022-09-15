class PessoaJuridica extends Pessoa {

    private readonly _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, _cnpj: string) {
        super(nome, idade, dataNascimento);
        this._cnpj = _cnpj;
    }

    get cnpj() {
        return this._cnpj;
    }

    toString(): string {
        return `Nome: ${this._nome} - Jurídica
        Idade: ${this.idade},
        Data de Nascimento: ${this.dataNascimento}`
    }
}