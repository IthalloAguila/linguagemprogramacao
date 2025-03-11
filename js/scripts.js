function seguir(){
    alert('Você agora esta seguindo Ithallo Aguila')
}
//Exercicio1
function exe1(){
    //vamos usar DOM para recuperar os dados do HTML
    //DOM - Document Obeject Model
    let nmr1 = Number(document.getElementById ("nm1").value)
    let nmr2 = Number(document.getElementById ("nm2").value)
    //Subtrair
    let sub = nmr1 - nmr2
    //Mostrar resultado
    //alert ("O resultado é, " + sub )
    document.getElementById("sub").innerText = "O resultado é " + sub
}

//Exercicio 2
function exe2(){
    //vamos usar DOM para recuperar os dados do HTML
    //DOM - Document Obeject Model
    let nmr1 = Number(document.getElementById ("nm1").value)
    let nmr2 = Number(document.getElementById ("nm2").value)
    let nmr3 = Number(document.getElementById ("nm3").value)
    //Multiplicar
    let mult = nmr1 * nmr2 * nmr3
    //Mostrar resultado
    //alert ("O resultado é, " + mult )
    document.getElementById("mult").innerText = "O resultado é " + mult
}
//Exercicio 3
function exe3(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let divisao = nro1 / nro2
    document.getElementById("divisao").innerText = "O resulta é " + divisao
}
//Exercicio 4
function exe4(){
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    // média ponderada
    let mp = ((nro1 * 2) + (nro2 * 3)) / 5
    document.getElementById("mp").innerText = "O resultado é " + mp
}
//Exercio 5
function exe5(){
    let preco = Number(document.getElementById("preco").value)
    let desconto = (preco * 10) / 100
    document.getElementById("desconto").innerText = "O novo preço é de " 
    + (preco - desconto)
}
//Exercicio 6