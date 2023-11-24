function Conta(banco, numero, agencia, saldo){
    this.banco = banco
    this.numero = numero
    this.agencia = agencia
    let _saldo = saldo

    this.getSaldo = function(){
        return _saldo;
    }

    this.setSaldo = function(valor){
        if(typeof valor === 'number'){
            _saldo = valor;
        }
    }
    this.deposito = function(){
        const novoSaldo = _saldo + 100;
        _saldo = novoSaldo;
    }
}

function ContaCorrente(){
    Conta.call(this, 'inter', 44532, 102, 2000)

    this.deposito = function(){
        const novoSaldo = this.getSaldo() + 500;
        this.setSaldo(novoSaldo);
    }
}
function ContaInvestimento(){
    Conta.call(this, 'XP', 99867, 101, 30000)

    this.deposito = function(){
        const novoSaldo = this.getSaldo() + 1500;
        this.setSaldo(novoSaldo);
    }
}
function ContaPoupanca(){
    Conta.call(this, 'Caixa', 23345, 244, 90000)

    this.deposito = function(){
        const novoSaldo = this.getSaldo() + 5000;
        this.setSaldo(novoSaldo);
    }
}

const contaLeonardo = new ContaCorrente();
contaLeonardo.deposito();

const contaLeonardoInvest = new ContaInvestimento();
contaLeonardoInvest.deposito();

const contaLeonardoPoupanca = new ContaPoupanca();
contaLeonardoPoupanca.deposito();

console.log(contaLeonardo);
console.log(contaLeonardoInvest);
console.log(contaLeonardoPoupanca);

