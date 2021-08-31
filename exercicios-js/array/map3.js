//implementando o map manualmente
Array.prototype.map2 = function (callback) {
  const newArray = [];
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
]

//Retornar um array apenas com os preços utilizando o metodo map()

const paraObjeto = json => JSON.parse(json); //transformar o json para objeto
const apenasPreco = produto => produto.preco; //acessas o valor do objeto transformado

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);