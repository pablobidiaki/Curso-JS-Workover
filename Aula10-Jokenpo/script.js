function jogar(){
    if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
        alert("Selecione uma opção")
    }else{
        var comp = Math.floor(Math.random () * 3)

        switch(comp){
            case 0:
                document.getElementById("pc").src="pcpedra.png"
                break
            case 1:
                 document.getElementById("pc").src="pcpapel.png"
                break
            case 2:
                document.getElementById("pc").src="pctesoura.png"
                break
            default:
                alert("Algo deu errado !")
        }

        if((document.getElementById("pedra").checked && comp == 0) || (document.getElementById("papel").checked && comp == 1) || (document.getElementById("tesoura").checked && comp == 2)){
            document.getElementById("res").innerHTML = "EMPATE"
        } else if ((document.getElementById("pedra").checked && comp == 2) || (document.getElementById("papel").checked && comp == 0) || (document.getElementById("tesoura").checked && comp == 1)){
            document.getElementById("res").innerHTML = "JOGADOR VENCEU"
        }else {
            document.getElementById("res").innerHTML = "COMPUTADOR VENCEU"
        }
    }
}

function resetar(){
    document.getElementById("pc").src="pc.png"
    document.getElementById("res").innerHTML = ""
}