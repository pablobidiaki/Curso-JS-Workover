var valor = 2

for(i = 1;i < 11;i++){
    document.write("<p> Tabuada do " + i + "</p>")
    for(j = 1;j < 11;j++){
        document.write(i + " x " + j + " = " + (j*i) + "<br>")
    }
}