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
    console.log('Click do mouse pressionado! chamando função pular()')

    pular();
});

console.log("===== INICIANDO O LOOP DO JOGO =====")
console.log("Agora o jogo vai começar a verificar colisão")

let loopDoJogo = setInterval(function(){
    // offsetLeft: Distância do elemento até a borda esquerda da tela
    // getComputeStyle = pega o estilo atual do elemento
    // ----- > +window.getComputedStyle(mario)
    // ----- > Pergunta ao navegador: "Qual é a posição atual do Mario na tela"
    // ----- > .bottom
    // Pega a distância do Mario (em pixels)
    // ------ > .replace 
    // ------ > Tira o px, deixando só o número: "120"
    // ------- > +window, só o +
    // ---- > Transforma o texto em "120" no número 120, para o JS fazer contas
    let posicaoCano = cano.offsetLeft;

    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log('cano: ', posicaoCano, 'Mario: ', posicaoMario)

    
})