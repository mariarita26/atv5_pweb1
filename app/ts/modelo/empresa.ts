class Empresa extends PessoaJuridica {

    constructor(nome: string, idade: number, dataNascimento: Date, _cnpj: string) {
        super(nome, idade, dataNascimento, _cnpj); 
    }
}