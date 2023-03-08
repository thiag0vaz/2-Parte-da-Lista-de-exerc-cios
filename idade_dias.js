//36°) Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import { question } from "readline-sync"

//Entrada 
const idade_anos = Number(question('valor da idade em anos: '))
const idade_meses = Number(question('valor da idade em meses: '))
const idade_dias = Number(question('valor da idade em dias: '))

//Processamento 
const anos = idade_anos * 365
const meses = idade_dias * 30
const soma = anos + meses + idade_dias

//Saída 
console.log("Se uma pessoa tem", idade_anos, 'anos,', idade_meses, 'meses e', idade_dias, 'dias de vida,',
'ela tem o equivalente a', soma, 'dias')