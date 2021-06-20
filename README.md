## Jogo da Forca

Este é um pequeno projeto onde implementado o jogo da forca usando JavaScript.

### Como rodar o jogo

Faça o clone do projeto:
> git clone https://github.com/Angelo-Marcos/Jogo-da-Forca.git

Ou baixe a pasta compactada do projeto.

A página inicial do jogo encontra-se no arquivo [index.html](https://github.com/Angelo-Marcos/Jogo-da-Forca/blob/main/index.html "Página inicial") abra o arquivo no navegador de internet para rodar o jogo.

### Como jogar

Na página inicial do jogo existem dois modos (Single Player e Multiplayer).

No modo 'Single Player', comece o jogo clicando no botão de 'Nova Palavra' onde será carregado os campos do tamanho da palavra a ser adivinhada, a palavra é sorteada aleatoriamente dentro de uma biblioteca de palavras já definidas no código da aplicação, caso queira é possível adicionar novas palavras manualmente na biblioteca, modificando no arquivo [pages.js](https://github.com/Angelo-Marcos/Jogo-da-Forca/blob/main/js/pages.js "Script js").
Após carregada a palavra o campo para o jogador inserir a letra é habilitado e o jogador pode tentar adivinhar a palavra digitando a letra e clicando em 'Jogar'. Clicando em 'Nova Palavra' novamente, outra palavra é carregada aleatoriamente.

No modo 'Multiplayer', comece o jogo digitando a palavra a ser adivinhada por outra pessoa e clique em confirmar, onde será carregado os campos do tamanho da palavra a ser adivinhada.
Após carregada a palavra o campo para o jogador inserir a letra é habilitado, o campo para inserir uma palavra é desabilitado e o jogador pode tentar adivinhar a palavra digitando a letra e clicando em 'Jogar'. Clicando em 'Nova Palavra' o jogador pode digitar outra palavra.

### Regras do jogo

- O jogador possui 7 chances para adivinha uma palavra.
- Digite apenas letras.
- Escreva uma palavra existente (modo Multiplayer).
