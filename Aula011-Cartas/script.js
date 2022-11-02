var naipe = ['♦','♣','♠','♥']
var cartas = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']

var naipeAle = Math.floor(Math.random() * 4)
var cartaAle = Math.floor(Math.random() * 13)

document.getElementById("RES").innerHTML = (cartas[cartaAle] + naipe[naipeAle])