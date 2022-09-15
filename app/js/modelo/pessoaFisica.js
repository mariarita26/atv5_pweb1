class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, idade, dataNascimento, _cpf) {
        super(nome, idade, dataNascimento);
        this._cpf = _cpf;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return `Nome: ${this._nome} - Física,
        Idade: ${this.idade},
        Data de Nascimento: ${this.dataNascimento}`;
    }
}
