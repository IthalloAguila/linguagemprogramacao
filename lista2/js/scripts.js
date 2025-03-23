function exe1(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcular média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("media").innerText = "Aprovado com média " + media
    }
    else {
        document.getElementById("media").innerText = "Reprovado com média " + media
    }
}
function exe2(){
    // recupera os dados do usuário
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcula média
    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("media").innerHTML = "Reprovado " + media
    }
    else if ((media >= 3) && (media < 7)){
        document.getElementById("media").innerHTML = "Exame " + media
    }
    else if ((media >= 7) && (media <= 10)){
        document.getElementById("media").innerHTML = "Aprovado " + media 
    }
    else {
        document.getElementById("media").innerHTML = "Problema com notas"
    }
}
function exe4(){
    //recupera os dados do uusuario
    let nmr1 = Number (document.getElementById("nmr1").value)
    let nmr2 = Number (document.getElementById("nmr2").value)
    let nmr3 = Number (document.getElementById("nmr3").value)
    //calcula o maior deles 
    if (nmr1>=nmr2 && nmr1>=nmr3){
        document.getElementById("maior").innerHTML = "O maior é " + nmr2
    }
    else if (nmr2 >= nmr1 && nmr2 >= nmr3){
        document
    }
}   
function exe5(){
    let nmr1 = Number(document.getElementById("nmr1").value)
    let nmr2 = Number(document.getElementById("nmr2").value)
    let selecao = Number(document.getElementById("selecao").value)

    //utilização do escolha 
    switch (selecao)
    {
        //media
        case 1:
            document.getElementById("resultado").innerText = (nmr1 + nmr2)/2
            break
        // diferença
        case 2: if (nmr1>=nmr2){
            document.getElementById("resultado").innerText = nmr1 - nmr2
        }else{
            document.getElementById("resultado").innerText = nmr2 - nmr1
        }
        break
        //produto (multiplicação)
        case 3:
            document.getElementById("resultado").innerText = nmr1 * nmr2
            break
        // divisão
        case 4: if(nmr2<=0){alert("O segundo numero deve ser maior que 0")
        }else{  
            document.getElementById("resultado").innerText = nmr1 / nmr2
        }
        break
     }
}
function exe6(){
    let nmr1 = Number(document.getElementById("nmr1").value)
    let nmr2 = Number(document.getElementById("nmr2").value)
    let selecao = Number(document.getElementById("selecao").value)

    //utilização do escolha
    switch (selecao)
    {
        
        //O primeiro numero elevado ao segundo
        case 1:
            document.getElementById("resultado").innerText = Math.pow (nmr1,nmr2)
            break
        //Raiz quadrada de cada numero
        case 2:
            document.getElementById("resultado").innerText = (nmr1*nmr1),(nmr2*nmr2)  
            break
        //Raiz cubica de cada numero
        case 3:
            document.getElementById("resultado").innerText = (nmr1*nmr1*nmr1),(nmr2*nmr2*nmr3) 
            break  
          
    }

}