/*
No javascript não temos como deixar uma variavel privada, utilisamos os metodos get e set para interceptar valores de variaveis que queremos que seja privada .
O metodo get usamos para retornar/obter o valor de alguma variavel
O metodo set usamos para manipular/validar/etc... valores de variaveis.
No exmplo a seguir, o metodo set fará uma verificação para que o valor da variavel sempre incremente pra cima, nunca para baixo, mesmo se passado um valor menor que o existente
*/

const sequencia = {
  _valor: 1, // convenção: usa-se "_" para dizer q a variavel é 'privada'
  get valor() { return this._valor++ },
  set valor(valor) { 
    if(valor > this._valor) {
      this._valor = valor;
    }
  }
}


console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor);