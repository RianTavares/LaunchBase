//Construção e impressão de objetos

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: "260"
    }
}

console.log(`A empresa está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)