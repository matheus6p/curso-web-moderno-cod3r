const soma = function (x, y) {
    return x + y;
}

const imprimirResutlado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResutlado(3, 4);
imprimirResutlado(3, 4, soma);
imprimirResutlado(3, 4, function (x, y){ // a função entra como terceiro parametro na chamada da função imprimirResultado
    return x - y;
})
imprimirResutlado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()