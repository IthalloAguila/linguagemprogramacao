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


