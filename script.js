const maxEntrda = prompt("Digite o Número Mais Alto do Bingo ?") 

const lastCall = document.querySelector(".lastCall")
const numerosChamados = document.querySelector(".numerosChamados")
const numerosChamadosEmOrdem = document.querySelector(".numerosEmOrdem")

max = maxEntrda 



const numerosBingo= []

const numerosEmOrdem = []

for(i=1; i<= max; i++){
    numerosBingo.push(i)
}
console.log(numerosBingo)


function atualizarordem(){
    numerosChamadosEmOrdem.innerHTML=''
    for(let numeros of numerosEmOrdem){
        numerosChamadosEmOrdem.innerHTML+=numeros+', '
    }

}

//Sort

function ordenarNumeros(array) {
    return array.sort((a,b)=> a - b)
}

function randomizarNumeros(array){
   return array.sort(()=> Math.random()-0.5)
}

randomizarNumeros(numerosBingo);
console.log(randomizarNumeros(numerosBingo));

var contador = -1;

function mostrarUmaUm(){
    contador++
    if(contador < numerosBingo.length) {
        console.log(numerosBingo[contador])
        numerosChamados.innerHTML+=numerosBingo[contador]+ ', '
        numerosEmOrdem.push(numerosBingo[contador])
        ordenarNumeros(numerosEmOrdem)
        atualizarordem()
        lastCall.innerHTML=numerosBingo[contador]
        
    }else {
        console.log("acabou o bingo")
        alert("acabou o bingo")
        
    }
}
//console.log(numerosBingo.length)


