class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, idade, dataNascimento, _cnpj) {
        super(nome, idade, dataNascimento);
        this._cnpj = _cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    toString() {
        return `Nome: ${this._nome} - Jurídica
        Idade: ${this.idade},
        Data de Nascimento: ${this.dataNascimento}`;
    }
}
