const Banco = require("../src/banco");

describe("Classe Banco - Método depositar", () => {
  let banco;

  beforeEach(() => {
    banco = new Banco(); 
    banco.saldo = 50;
  });

  // Método 1
  test("Depositar o valor alterando o saldo corretamente", async () => {
    const valorDepositado = 50;
  
    const saldoAposDeposito = banco.depositar(valorDepositado);
  
    expect(saldoAposDeposito).toBe(100);
  });
  
  test("Adicionar o depósito na lista de transações", async () => {
    banco.depositar(50);
  
    expect(banco.transacoes).toHaveLength(1);
    expect(banco.transacoes[0]).toEqual({ tipo: 'Depósito', valor: 50 });
  });
});

describe("Classe Banco - Método sacar", () => {
  let banco;

  beforeEach(() => {
    banco = new Banco(); 
    banco.saldo = 50;
  });

  test("Sacar valor válido e atualizar o saldo", async () => {
    const novoSaldo = banco.sacar(20); // sacar retorna o novo saldo
    expect(novoSaldo).toBe(30);
    expect(banco.transacoes).toContainEqual({ tipo: 'Saque', valor: 20 });
  });
});

describe("Classe Banco - Método obterSaldo", () => {
  let banco;

  beforeEach(() => {
    banco = new Banco(); 
    banco.saldo = 50;
  });

  test("Obter saldo atual", async () => {
    expect(banco.saldo).toBe(50);
  });
});
  
describe("Classe Banco - Método obterHistorico", () => {
  let banco;

  beforeEach(() => {
    banco = new Banco(); 
    banco.saldo = 50;
  });

  test("Obter histórico de transações", async () => {
    banco.depositar(20);
    banco.sacar(20);
    expect(banco.transacoes[0]).toEqual({ tipo: 'Depósito', valor: 20 });
    expect(banco.transacoes[1]).toEqual({ tipo: 'Saque', valor: 20 });
  });
});

