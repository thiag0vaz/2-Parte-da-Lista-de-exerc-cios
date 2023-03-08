//33°) Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
//(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767)

import { question } from "readline-sync"

//Entrada 
const numero = Number(question('valor do número inteiro de 3 dígitps: '))

//Processamento 
const centenas = Math.floor(numero / 100)
const resto = numero % 100
const dezenas = Math.floor(resto / 10)
const unidades = resto % 10
const inverso = unidades * 100 + dezenas * 10 + centenas
const soma = numero + inverso 

//Saída 
console.log('A soma entre', numero, 'e seu inverso é', inverso, 'é', soma)