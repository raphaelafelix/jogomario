// Criação dr variáveis para encontrar as classes
let frisk = document.querySelector('.frisk'); // encontrar o mário
let sans = document.querySelector('.sans'); // encontra o cano
let borboleta = document.querySelector('.borboleta'); // encontra a nuvem
let telaFim = document.querySelector('.fim'); // encontra a tela de game over
let botaoReiniciar = document.querySelector('.reiniciar'); // encontra o botão

console.log('=== PARADA 01 ===');
console.log('Frisk:', frisk);
console.log('Sans:', sans);
console.log('Borboleta:', borboleta);
console.log('Tela de Fim:', telaFim);
console.log('Botão:', botaoReiniciar);

function pular(){

    frisk.classList.add('pular');

    // settimeout = espera um tempo e depois executa algo

    setTimeout(function(){
        // assim forma o Mário volta ao normal
        frisk.classList.remove('pular')
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
    let posicaoSans = sans.offsetLeft;

    let posicaoFrisk = +window.getComputedStyle(frisk).bottom.replace('px', '')

    // console.log('cano: ', posicaoCano, 'Mario: ', posicaoMario)

    // Condição de Colisão
    // O if pergunta 3 coisas AO MESMO TEMPO
    // 1. O cano está perto do Mário? (posicaoCano <= 100)
    // 2. O cano ainda está na tela? (posicaoCano > 0)
    // 3. O Mario está no chão? (posicaoMario < 60 - não pulou)
    // Se TODAS as 3 forem verdade, o Mário bateu!

    if(posicaoSans <= 100 && posicaoSans > 0 && posicaoFrisk < 60){
        console.log('==== COLISÃO DETECTADA! ====')
        console.log('Sans na posição', posicaoSans)
        console.log('Frisk na posição', posicaoFrisk)
        console.log('Fim de jogo!')

        // Parar o mário quando ele colidir

        // PARA O CANO
        sans.style.animation = 'none';
        sans.style.left = posicaoSans + 'px';

        // PARA O MÁRIO 
        frisk.style.animation = 'none';
        frisk.style.bottom = posicaoFrisk + 'px';

        // TROCA A IMAGEM DO MARIO PARA GAME OVER
        frisk.src = './img/its-overr.gif';
        frisk.style.width = '170px'

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
    sans.style.animation = 'mexerSans 1.5s infinite linear';
    sans.style.left = '';

    // Restaura o Mário
    frisk.src = './img/frisk.gif'
    frisk.style.width = '130px';
    frisk.style.bottom = '0px';
    frisk.style.animation = ''; // remove qualquer animação fixa
}


/// =================== CRIAR UM NOVO LOOP ============================== //

loopDoJogo = setInterval(function(){
    let posicaoSans = sans.offsetLeft;
    let posicaoFrisk = +window.getComputedStyle(frisk).bottom.replace('px','')


    // A MESMA CONDIÇÃO DE COLISÃO ANTERIOR
    if(posicaoSans<=100 && posicaoSans > 0 && posicaoFrisk < 60){
        console.log('============== COLISÃO NO JOGO REINICIANDO ================')

        sans.style.animation = 'none';
        sans.style.left = posicaoSans = 'px'

        frisk.style.animation = 'none';
        frisk.style.bottom = posicaoFrisk = 'px';
        frisk.src = './img/its-overr.gif'
        frisk.style.width = '70px';

        telaFim.style.visibility = 'visible';
        clearInterval(loopDoJogo);
    }
}, 10);

// FAZER O BOTÃO DE REINICIAR
botaoReiniciar.addEventListener('click', function(){
    console.log('Botão Reiniciar Clicado!');
    reiniciarJogo()

});