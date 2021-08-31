function criarProduto(nome, preco){
    return{
        nome,       // nesse exemplo não é necessario passar o valor do objeto
        preco,     //somente a chave é necessário, pois a chave do objeto recebe o mesmo nome os parametros da função
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

console.log('\n')

//outra forma de criar a função utilizando objeto completo (chave: valor)

function criarProduto2(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log('objeto passado por completo (chave: valor)')
console.log(criarProduto2('Notebook', 2199.99))
console.log(criarProduto2('iPad', 1199.49))