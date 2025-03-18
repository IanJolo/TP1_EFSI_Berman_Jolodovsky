let notaMate=document.getElementById("notaMate");
let notaLengua=document.getElementById("notaLengua");
let notaEfsi=document.getElementById("notaEfsi");


document.getElementById("notaMate").addEventListener('input',  () => {
    validarIngreso(notaMate);
})
document.getElementById("notaLengua").addEventListener('input',  () => {
    validarIngreso(notaLengua);
})
document.getElementById("notaEfsi").addEventListener('input',  () => {
    validarIngreso(notaEfsi);
})

function validarIngreso(nota){
    const notaMin=1;
    const notaMax=10;
    let esValido=(nota.value>=notaMin && nota.value<=notaMax);
    if(esValido){
        if(nota.id="notaMate"){
            notaMate.style.border="3px solid green";
        }else if(nota.id="notaLengua"){
            notaLengua.style.border="3px solid green";
        }else (nota.id="notaEfsi");{
            notaEfsi.style.border="3px solid green";
        }
    }else{
        if(nota.id="notaMate"){
            notaMate.style.border="3px solid red";
        }else if(nota.id="notaLengua"){
            notaLengua.style.border="3px solid red";
        }else(nota.id="notaEfsi");{
            notaEfsi.style.border="3px solid red";
        }
    }
}


calcularPromedio(){

}