'use strict'
const botaoMostrarNumeros  = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares  = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosTriplo = document.getElementById('botao-mostrar-numeros-triplo')
const botaoMostrarNumerosImpar = document.getElementById('botao-mostrar-numeros-impar')
const botaoMostrarNumerosMultiploDe3e5 = document.getElementById('botao-mostrar-numeros-multiplode3e5')
const botaoMostrarNumerosMultiploDe3ou5 = document.getElementById('botao-mostrar-numeros-multiplode3ou5')
const botaoMostrarNumerosProximoNumeroPrimo = document.getElementById('botao-mostrar-numeros-proximonumeroprimo')


function mostrarNumeros(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)

    }
}

function mostrarNumerosPares(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
        if (numeros[contador] % 2 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }

    }
    }
    function mostrarNumerosTriplo(){
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-triplo')
    
        container.replaceChildren('')
        const ultimoIndice = numeros.length
        for (let contador=0; contador < ultimoIndice; contador++){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador] * 3

            
            container.appendChild(novoSpan)
    
        }
    }
    

    function mostrarNumerosImpar(){
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-impar')

        container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
        if (numeros[contador] % 2 !== 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]

            container.appendChild(novoSpan)
        }

    }

    }

    function mostrarNumerosMultiploDe3e5(){
        const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-multiplode3e5')

        container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
        if (numeros[contador] % 3 == 0 && numeros[contador] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]

            container.appendChild(novoSpan)
        }


    }
}

function mostrarNumerosMultiploDe3ou5(){
    const numeros = document.getElementById('numeros').value.split(',')
        const container = document.getElementById('container-mostrar-numeros-multiplode3ou5')

        container.replaceChildren('')
    const ultimoIndice = numeros.length
    for (let contador=0; contador < ultimoIndice; contador++){
        if (numeros[contador] % 3 == 0 || numeros[contador] % 5 == 0){
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]

            container.appendChild(novoSpan)
        }


    }
}

function mostrarNumerosProximoNumeroPrimo(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-proximonumeroprimo')

    container.replaceChildren('')
const ultimoIndice = numeros.length
for (let contador=0; contador < ultimoIndice; contador++){

}
}
    
    function mostrarNumerosProximoNumeroPrimo(){

        
        if (numero <= 1) return false;
        if (numero <=3) return true;
        if(numero % 2 === 0 || numero % 3 === 0) return false;

        for (let contador = 5; contador < numero; contador++){
            if (numero % contador === 0) return false
        }
        return true
    }



botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosTriplo.addEventListener('click', mostrarNumerosTriplo)
botaoMostrarNumerosImpar.addEventListener('click', mostrarNumerosImpar)
botaoMostrarNumerosMultiploDe3e5.addEventListener('click', mostrarNumerosMultiploDe3e5)
botaoMostrarNumerosMultiploDe3ou5.addEventListener('click', mostrarNumerosMultiploDe3ou5)
botaoMostrarNumerosProximoNumeroPrimo.addEventListener('click', mostrarNumerosProximoNumeroPrimo)