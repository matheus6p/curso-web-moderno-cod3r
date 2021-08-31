const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
];

console.log(produtos.filter((p) => {
  return false;
}));

const fragil = (p) => {
  return p.fragil;
}

const caro = (p) => {
  return p.preco >= 500;
}

console.log(produtos.filter(fragil).filter(caro));