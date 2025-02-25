function seguir(){
    alert('Você agora esta seguindo Ithallo Aguila')
}
//Ecercicio1
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
