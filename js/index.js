  
let cards = document.querySelector('.cards')

fetch('jogadores-Cruzeiro.json')
.then(resposta => resposta.json())
.then(dados => dados.forEach( jogador => {
   
    // criar um card padrao
    let card = document.createElement('div')
    card.classList.add('card')
    console.log(card)

    // colocar cada card dentro da div cards
    cards.appendChild(card)

    // preencher os dados de cada jogador
    card.innerHTML = `
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <img class="pe" src="images/chuteira.png" />
    <img class="escudo" src="images/escudo/Cruzeiro_Esporte_Clube_(logo).svg.png" alt="" />
    <h2 class="nomeJogador">${jogador.nome}</h2>
    <h3 class="numerojogador">${jogador.numero}</h3>
    <h4 class="peDominante">${jogador.pe}</h4>
    `
})
)
