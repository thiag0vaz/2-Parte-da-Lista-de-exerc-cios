//31°) Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import { question } from "readline-sync"

//Entrada 
const binario = Number(question('valor binário: '))

//Processamento 
const decimal = parseInt(binario , 2)

console.log('O nomero binário', binario, 'é igul a', decimal, 'decimal ')

//Busquei ajuda no YT com essa mas não entendi o porque que a (const decimal) deve ficar nesse formato. 