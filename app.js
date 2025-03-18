let notaMate=document.getElementById("notaMate");
let notaLengua=document.getElementById("notaLengua");
let notaEfsi=document.getElementById("notaEfsi");
let muestraResult=document.getElementById("muestraResult")
let gif=document.getElementById("gifJava");

document.getElementById("notaMate").addEventListener('input',  () => {
    cambiarInput(notaMate);
})
document.getElementById("notaLengua").addEventListener('input',  () => {
    cambiarInput(notaLengua);
})
document.getElementById("notaEfsi").addEventListener('input',  () => {
    cambiarInput(notaEfsi);
})
function validarIngreso(nota){
    const notaMin=1;
    const notaMax=10;
    let esValido=(nota>=notaMin && nota<=notaMax);
    return esValido;
}
function cambiarInput(nota){
    let esValido=validarIngreso(nota.value);
    if(esValido){
        nota.style.border="3px solid green"
    }else {
    nota.style.border="3px solid red"
    }
    if(nota.value==""){
        nota.style.border="1px solid black";
    }
}
function validarNotas(){
    let notasValidas=false;
    if(validarIngreso(notaMate.value)==true && validarIngreso(notaLengua.value)==true && validarIngreso(notaEfsi.value)==true ){
notasValidas=true;
    }else {
    notaMate.style.border="3px solid red";
    notaEfsi.style.border="3px solid red";
    notaLengua.style.border="3px solid red";
    muestraResult.style.color="red";
    muestraResult.innerHTML="Las notas ingresadas no son válidas";
    }
    return notasValidas;
}
    function calcularPromedio(){
    const cantMaterias=3;
    if(validarNotas()==true){
    let suma = parseInt(notaEfsi.value) + parseInt(notaLengua.value) + parseInt(notaMate.value);
    let promedio=suma/ cantMaterias;
    if(promedio>=6){
        if(promedio<8){
        gif.setAttribute("src", "gifs/6.gif")
        }else if(promedio<9){
        gif.setAttribute("src", "gifs/8.gif")
        }else {
            gif.setAttribute("src", "gifs/10.gif")
        }
        muestraResult.style.color="green";
    }else {
        gif.setAttribute("src", "gifs/2.gif")
        muestraResult.style.color="red";
    }
    muestraResult.innerHTML=`El promedio de notas es: ${promedio}`;
}
}

function calcularMateriaMax(){
    let notas=[parseInt(notaMate.value), parseInt(notaLengua.value), parseInt(notaEfsi.value)]
    let notaMax=0;
    let materias=["Mate", "Lengua", "Efsi"];
    let materiaMax="";
    let listaMateriaMax=[];
    let listaNotaMax=[];
    if(validarNotas()==true){
    for(let i=0;i<notas.length;i++){
        if(notas[i]>notaMax){
         notaMax=notas[i];
         materiaMax=materias[i];
        }else if(notas[i]===notaMax){
            listaNotaMax.push(notas[i]);
            listaMateriaMax.push(materias[i])
        }
    }
    if(notaMax>listaNotaMax[0]){
        listaNotaMax.splice(0, listaNotaMax.length)
    }
    muestraResult.style.color="blue";
    if(listaNotaMax[0]==null){
        gif.setAttribute("src", "gifs/6.gif")
        muestraResult.innerHTML=`La materia con la mayor nota es: ${materiaMax}`;
    }else if(listaNotaMax[1]==null){
        gif.setAttribute("src", "gifs/8.gif")
        muestraResult.innerHTML=`Las materias con la mayor nota es: ${materiaMax} y ${listaMateriaMax[0]}`;
    }else {
        gif.setAttribute("src", "gifs/10.gif")
        muestraResult.innerHTML=`Las materias con la mayor nota es: ${materiaMax}, ${listaMateriaMax[0]} y ${listaMateriaMax[1]}`;
    }
}
}