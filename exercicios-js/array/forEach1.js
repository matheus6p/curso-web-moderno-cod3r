const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//callback passada no forEach tem 3 parametros: nome, indice, array (e sempre devem seguir essa ordem)
aprovados.forEach((nome, indice) => {
  console.log(`${indice+1} - ${nome}`);
});

aprovados.forEach(nome => console.log(nome));

//armazenando a função em uma variavel
const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);