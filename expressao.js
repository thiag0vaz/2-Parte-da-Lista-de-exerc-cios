//39°) Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: (D = R + S / 2) onde R = (a+b)² e S = (b+c)²

import { question } from "readline-sync"

//Entrada 
const a = Number(question('valor de a: '))
const b = Number(question('valor de b: '))
const c = Number(question('valor de c: '))

//Processamento 
const r = (a + b) ** 2
const s = (b + c) ** 2
const d = (r + s) / 2

//Saída 
console.log('O resultado da expresão será', d)