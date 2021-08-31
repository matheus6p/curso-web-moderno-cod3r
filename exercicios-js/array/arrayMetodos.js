const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop('Massa') //remove ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen'); // add elemento no final do array
console.log(pilotos);

pilotos.shift(); //remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); //add elemento no inicio do array
console.log(pilotos);

//splice pode add e remover elementos

// add
pilotos.splice(2, 0, 'Bottas', 'Massa'); //add a partir do indice 2, remova 0 itens, add valores
console.log(pilotos);

//remover
pilotos.splice(3, 1); // a partir do indice 3, remova 1 item
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos1);