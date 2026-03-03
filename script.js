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

    // console.log('cano: ', posicaoCano, 'Mario: ', posicaoMario)

    // Condição de Colisão
    // O if pergunta 3 coisas AO MESMO TEMPO
    // 1. O cano está perto do Mário? (posicaoCano <= 100)
    // 2. O cano ainda está na tela? (posicaoCano > 0)
    // 3. O Mario está no chão? (posicaoMario < 60 - não pulou)
    // Se TODAS as 3 forem verdade, o Mário bateu!

    if(posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 60){
        console.log('==== COLISÃO DETECTADA! ====')
        console.log('Cano na posição', posicaoCano)
        console.log('Mario na posição', posicaoMario)
        console.log('Fim de jogo!')

        // Parar o mário quando ele colidir

        // PARA O CANO
        cano.style.animation = 'none';
        cano.style.left = posicaoCano + 'px';

        // PARA O MÁRIO 
        mario.style.animation = 'none';
        mario.style.bottom = posicaoMario + 'px';

        // TROCA A IMAGEM DO MARIO PARA GAME OVER
        mario.src = './img/game-over.png';
        mario.style.width = '70px'

        // mostrar a tela de game over
        telaFim.style.visibility = 'visible';

        // Parar o loop
        clearInterval(loopDoJogo)
    }

}, 10) // 10 milissegundos

// Função para reiniciar 
function reiniciarJogo(){
    console.log('=== REINICIANDO JOGO ===')

    // Esconder a tela do Game Over
    telaFim.style.visibility = 'hidden'

    // Restaurar o cano
    cano.style.animation = 'mexerCano 1.5s infinite linear';
    cano.style.left = '';

    // Restaura o Mário
    mario.src = './img/mario.gif'
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.animation = ''; // remove qualquer animação fixa
}


/// =================== CRIAR UM NOVO LOOP ============================== //

loopDoJogo = setInterval(function(){
    let posicaoCano = cano.offsetLeft;
    let posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','')


    // A MESMA CONDIÇÃO DE COLISÃO ANTERIOR
    if(posicaoCano<=100 && posicaoCano > 0 && posicaoMario < 60){
        console.log('============== COLISÃO NO JOGO REINICIANDO ================')

        cano.style.animation = 'none';
        cano.style.left = posicaoCano = 'px'

        mario.style.animation = 'none';
        mario.style.bottom = posicaoMario = 'px';
        mario.src = './img/game-over.png'
        mario.style.width = '70px';

        telaFim.style.visibility = 'visible';
        clearInterval(loopDoJogo);
    }
}, 10);

// FAZER O BOTÃO DE REINICIAR
botaoReiniciar.addEventListener('click', function(){
    console.log('Botão Reiniciar Clicado!');
    reiniciarJogo()

});