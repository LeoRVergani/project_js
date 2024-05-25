let usuario = {
  id: 26,
  username: 'Luis'
}

if(26 == usuario.id || 'Luiz' == usuario['username']){
  console.log("Quer alterar sua senha?")
} else {
  console.log("Usuário sem autorização.")
}

let pessoa = {
  nome: "Enrique",
  idade: 28,
  altura: 1.82,
  fumante: false,
  comidasFavoritas: ["Arroz", "Feijão"],
  familia: {
    mae: "Carmen",
    pai: "Hernán"
  }
}

console.log(pessoa.comidasFavoritas[1])
