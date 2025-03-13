const Banco = require("../src/banco");

describe("Banco", () => {
  let banco;

  beforeEach(() => {
    banco = new Banco(); // Cria uma nova instância da classe antes de cada teste
  });

  // test("testes", async () => {});

  test("Depositar o valor alterando o saldo corretamente", async () => {
    const valorDepositado = 50;
  
    const saldoAposDeposito = banco.depositar(valorDepositado);
  
    expect(saldoAposDeposito).toBe(50);
  });
  
  test("Adicionar o depósito na lista de transações", async () => {
    banco.depositar(50);
  
    expect(banco.transacoes).toHaveLength(1);
    expect(banco.transacoes[0]).toEqual({ tipo: 'Depósito', valor: 50 });
  });

  test("Sacar valor maior que o saldo", async () => {
    
  })
});

