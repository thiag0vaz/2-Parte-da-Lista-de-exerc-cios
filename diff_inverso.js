//32°) Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

import { question } from 'readline-sync'

//Entrada 
const numero1 = Number(question('valor do número inteiro 1: '))
const numero2 = Number(question('valor do número inteiro 2: '))
const numero3 = Number(question('valor do número inteiro 3: '))

//Processamento 
const numero = numero1 +""+ numero2 +""+ numero3
const inverso = numero3 +""+ numero2 +""+ numero1
const diff = numero - inverso

//Saída 
console.log('A diferença entre', numero, 'e seu inverso é', diff)