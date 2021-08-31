const alunos = [
  { nome: 'João', nota: 7.9},
  { nome: 'Maria', nota: 9.2},
];

//Imperativo// aqui a forma de obter os resultados é importante
let total1 = 0;
for(let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

//Declarativo// aqui a forma de obter os resultados não importa
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);