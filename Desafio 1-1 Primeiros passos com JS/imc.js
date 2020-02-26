//Cálculo de IMC

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura)

if(imc >= 30) { 
    console.log("Carlos, você está acima do peso")
} else if(imc < 29.9) {
    console.log("Carlos, você não está acima do peso")
}