// Criação dr variáveis para encontrar as classes
let mario = document.querySelector('.mario'); // encontrar o mário
let cano = document.querySelector('.cano'); // encontra o cano
let nuvem = document.querySelector('.nuvem'); // encontra a nuvem
let telaFim = document.querySelector('.fim'); // encontra a tela de game over
let botaoReiniciar = document.querySelector('.reiniciar'); // encontra o botão

console.log('=== PARADA 01 ===');
console.log('Mario:', mario);
console.log('Cano:', cano);
console.log('Nuvem:', nuvem);
console.log('Tela de Fim:', telaFim);
console.log('Botão:', botaoReiniciar);

function pular(){

    mario.classList.add('pular');

    // settimeout = espera um tempo e depois executa algo

    setTimeout(function(){
        // assim forma o Mário volta ao normal
        mario.classList.remove('pular')
    }, 500); // 500 milissegundos = 0,5 segundos
}
document.addEventListener('keydown', function(){
    // Mostra no console quando a tecla é pressionada
    console.log('Tecla pressionada! chamando função pular()')

    // Qual função deve ser chamada?
    pular();
})

document.addEventListener('click', function(){
    // Mostra no console quando a tecla é pressionada
    console.log('Tecla pressionada! chamando função pular()')

    // Qual função deve ser chamada?
    pular();
})