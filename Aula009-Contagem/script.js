var manip = false 
function contagem(){
    if(manip == false){
        var time1 = setInterval(function(){start()},1000)
        var time2 = setTimeout("fim()",13200)
        var contagem = 10
        function start(){
            beep()
            document.getElementById("tempo").innerHTML = contagem
            if(contagem == 0){
                clearInterval(time1)
                raio()
                document.getElementById("tempo").innerHTML = "GAME OVER"
                document.getElementById("botao").src="explosion.gif"
                time2()
            }
            contagem--
        }
        manip = true
    }
}

function beep(){
    var somBeep = new Audio()
    somBeep.src = "beep.mp3"
    somBeep.play()
}

function raio(){
    var raio = new Audio()
    raio.src = "raio.mp3"
    raio.play()
}

function fim(){
    document.getElementById("botao").src="clean.png"
}