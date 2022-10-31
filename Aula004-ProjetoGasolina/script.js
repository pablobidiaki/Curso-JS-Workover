var etanol, gasolina

function calc(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."))
    gasolina = parseFloat(frmFlex.txtGaso.value.replace(",","."))

    if(etanol < 0.7 * gasolina){
        document.getElementById("img").src="imgs/etanol.png" 
    }else{
        document.getElementById("img").src="imgs/gasolina.png"
    }
}

function limpar(){
    document.getElementById("img").src="imgs/neutro.png"
}