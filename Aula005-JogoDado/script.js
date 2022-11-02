var sorteio = Math.floor(Math.random() * 6 + 1)

switch(sorteio){
    case(1):
        document.getElementById("dado").scr="https://github.com/professorjosedeassis/javascript/blob/master/aulas/dado/face1.png?raw=true"
        break
    case(2):
        document.getElementById("dado").src="https://github.com/professorjosedeassis/javascript/blob/master/aulas/dado/face2.png?raw=true"
        break
    case(3):
        document.getElementById("dado").src="https://github.com/professorjosedeassis/javascript/blob/master/aulas/dado/face3.png?raw=true"
        break
    case(4):
        document.getElementById("dado").src="https://github.com/professorjosedeassis/javascript/blob/master/aulas/dado/face4.png?raw=true"
        break
    case(5):
        document.getElementById("dado").src="https://github.com/professorjosedeassis/javascript/blob/master/aulas/dado/face5.png?raw=true"
        break
    case(6):
        document.getElementById("dado").src="https://github.com/professorjosedeassis/javascript/blob/master/aulas/dado/face6.png?raw=true"
        break
    default:
        alert("algo deu errado")
}
