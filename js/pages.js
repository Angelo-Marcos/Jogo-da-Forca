/*
Descricao : Script JavaScript para implementação de jogo da forca
Aluno : Angelo Marcos De Oliveira
Data : 16/06/2021
*/

var palavras = ['amarelo', 'amiga', 'amor', 'ave', 'avião', 'avó', 'balão', 'bebê', 'bolo', 'branco', 'cama', 'caneca', 'celular',
    'clube', 'copo', 'doce', 'elefante', 'escola', 'estojo', 'faca', 'foto', 'garfo', 'geleia', 'girafa', 'janela', 'limonada', 'mãe',
    'meia', 'noite'
]
var qtdPalavras = palavras.length - 1
var posicaoPalavra
var palavra // Variável para armazenar palavra 
var tamanhoPalavra
var qtdLetras = []
var acertos
var erros
var acertou = false
var jogando = false
var jogador
var multiplay = false
var palavraMultiplayer


function letrasPalavra(l) {
    var letra
    for (var i = 0; i < 19; i++) {
        letra = window.document.getElementById('letra' + i).value = ''
        letra = window.document.getElementById('letra' + i).style.display = 'none'
    }


    for (var i = 0; i < l; i++) {
        letra = window.document.getElementById('letra' + i).style.display = 'inline-block'
    }
}

function player() {
    jogando = true
    posicaoPalavra = Math.round(Math.random() * qtdPalavras) // Sorteia o índice de uma palavra
    palavra = palavras[posicaoPalavra]
    tamanhoPalavra = palavra.length
    letrasPalavra(tamanhoPalavra)
    jogador = window.document.getElementById('letraPlayer')
    jogador.value = ''
    jogador.focus()
    acertos = 0
    erros = 0
    acertou = false
    window.document.getElementById('letrasDigitadas').innerHTML = 'Letras digitadas: '


    // for(var i=0; i<7; i++) {

    // }
}

function multiplayer() {
    multiplay = true
    palavraMultiplayer = window.document.getElementById('palavraPlayer').value
    tamanhoPalavra = palavraMultiplayer.length
    letrasPalavra(tamanhoPalavra)
    jogador = window.document.getElementById('letraPlayer')
    jogador.value = ''
    jogador.focus()
    acertos = 0
    erros = 0
    acertou = false
    window.document.getElementById('letrasDigitadas').innerHTML = 'Letras digitadas: '
    window.document.getElementById('palavraPlayer').value = ''
}

function start() {
    jogador.focus()

    if (jogador.value == '') {
        window.alert('Digite uma letra!')
    } else {
        if (jogando) {
            var obj
            var letraDigitada
            var letra
            var pesquisa
            letra = jogador.value
            jogador.value = ''
            acertou = false
            pesquisa = palavra.match(letra)

            while (pesquisa != null) {
                letraDigitada = palavra.search(letra)
                obj = window.document.getElementById('letra' + letraDigitada).value = letra
                palavra = palavra.replace(letra, '0')
                acertos++
                pesquisa = palavra.match(letra)
                acertou = true
            }
            if (!acertou) {
                window.document.getElementById('letrasDigitadas').innerHTML += letra.toUpperCase() + ' '
                erros++
                if (erros < 7) {
                    window.alert('Erros restantes ' + (7 - erros))
                } else {
                    window.alert('GAME OVER!!! Você foi enforcado!\nPalavra correta: ' + palavra)
                    jogando = false
                }
            }
            if (acertos == tamanhoPalavra) {
                window.alert('Parabéns!!! \nVocê se salvou!')
                jogando = false
            }
        } else if (multiplay) {
            var obj
            var letraDigitada
            var letra
            var pesquisa
            letra = jogador.value
            jogador.value = ''
            acertou = false
            pesquisa = palavraMultiplayer.match(letra)

            while (pesquisa != null) {
                letraDigitada = palavraMultiplayer.search(letra)
                obj = window.document.getElementById('letra' + letraDigitada).value = letra
                palavraMultiplayer = palavraMultiplayer.replace(letra, '0')
                acertos++
                pesquisa = palavraMultiplayer.match(letra)
                acertou = true
            }
            if (!acertou) {
                window.document.getElementById('letrasDigitadas').innerHTML += letra.toUpperCase() + ' '
                erros++
                if (erros < 7) {
                    window.alert('Erros restantes ' + (7 - erros))
                } else {
                    window.alert('GAME OVER!!! Você foi enforcado!\nPalavra correta: ' + palavraMultiplayer)
                    jogando = false
                }
            }
            if (acertos == tamanhoPalavra) {
                window.alert('Parabéns!!! \nVocê se salvou!')
                jogando = false
            }
        }
    }

}