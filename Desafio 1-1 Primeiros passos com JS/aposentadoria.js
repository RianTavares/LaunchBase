//Cálculo de aposentadoria

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
const regra = idade + contribuicao;

if(sexo == "F" ) {
    if(contribuicao >= 30 && regra >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}

else if(sexo == "M") {
    if(contribuicao >= 35 && regra >= 95) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}