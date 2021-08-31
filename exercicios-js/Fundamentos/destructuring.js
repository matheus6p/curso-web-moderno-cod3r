// novo recurso do ES2015

const pessoa = {
    nome: 'Ana', 
    idade: 5, 
    endereço: {
        logradouro: 'Rua ABC', 
        numero: 1000
    }
}

const { nome, idade} = pessoa; //extraia do objeto 'pessoa' os atributos 'nome' e 'idade';
console.log(nome, idade);

const { nome: n, idade: i} = pessoa; //extraia do objeto 'pessoa' os atributos 'nome' e 'idade' e atribua a variavel 'n' e 'i' consecutivamente;
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa; // o atributo 'sobrenome' não existe dentro do objeto e terá o valor como 'undefined', já o atributo 'bemHumorada' tambem não existe, mas foi setado um valor padrão como 'true';
console.log(sobrenome, bemHumorada);

const { endereço: {logradouro, numero, cep}} = pessoa;
console.log(logradouro, numero, cep);