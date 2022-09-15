//const c1 = new Conta('1', 100);
//const c2 = new Conta('2');
//console.log(c1.numero);
//const contaController = new ContaController();
//contaController.adicionarConta(c1);
//contaController.adicionarConta(c2);
//contaController.listar();
//const contaBonificada = new ContaBonificada('10', 100);
//contaBonificada.creditar(10);
//console.log(contaBonificada.getSaldo());
//const p1 = new Pessoa('Maria', '20', new Date('07/26/2001'));
//const p2 = new PessoaFisica('Joicy', '21',new Date('07/28/2001'), '112.865.954-98');
//const p3 = new PessoaJuridica('Siri Cascudo', '25', new Date('10/05/1997'), '1234567899');
//console.log(p1);
//console.log(p2.toString());
//console.log(p3.toString());
//console.log("\nAtributos Pessoa")
//console.log(p1.nome);
//console.log(p1.idade);
//console.log(p1.dataNascimento);
//console.log("\nAtributos Pessoa Física")
//console.log(p2.nome);
//console.log(p2.idade);
//console.log(p2.dataNascimento);
//console.log(p2.cpf);
//console.log("\nAtributos Pessoa Jurídica")
//console.log(p3.nome);
//console.log(p3.idade);
//console.log(p3.dataNascimento);
//console.log(p3.cnpj);
console.log("\nClientes e empresas");
const repositorioPessoas = new RepositorioPessoas();
const c11 = new Conta('1', 111);
const c22 = new Conta('2', 256);
const c3 = new Conta('3', 965);
const c4 = new Conta('4', 123);
const c5 = new Conta('5', 5);
const c6 = new Conta('6', 105);
const cliente1 = new Cliente('Antônio da Silveira', 25, new Date('05/10/1195'), '12356975511');
const cliente2 = new Cliente('Joana Maria', 21, new Date('02/01/2001'), '2569631550');
const cliente3 = new Cliente('João Bruno', 23, new Date('05/07/1999'), '1225630042');
const empresa1 = new Empresa('Sonho', 1, new Date('02/15/2001'), '123654231456');
const empresa2 = new Empresa('Casarão', 2, new Date('03/05/2019'), '32145665421');
const empresa3 = new Empresa('Tec', 3, new Date('01/30/2012'), '26534102120023');
cliente1.acrescentarConta(c11);
cliente2.acrescentarConta(c22);
cliente3.acrescentarConta(c3);
empresa1.acrescentarConta(c4);
empresa2.acrescentarConta(c5);
empresa3.acrescentarConta(c6);
repositorioPessoas.adicionar(cliente1);
repositorioPessoas.adicionar(cliente2);
repositorioPessoas.adicionar(cliente3);
repositorioPessoas.adicionar(empresa1);
repositorioPessoas.adicionar(empresa2);
repositorioPessoas.adicionar(empresa3);
repositorioPessoas.pessoas
    .forEach(pessoa => {
    console.log('Pessoa: ' + pessoa.nome + ' - Saldo Total: ' + pessoa.saldoTotalContas() + ' - Média Saldos: ' + pessoa.mediaSaldoContas());
});
empresa1.removerConta('5');
console.log(empresa2.pesquisarConta('4'));
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
