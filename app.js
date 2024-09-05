//================= DECLARAÇÃO DE VARIAVEIS=================
let listaResultado = document.getElementById('lista-resultado')
let jogoDetalhado = document.getElementById('jogoDetalhado')
let resultados = ''
let resultadosPreenchidos = false

//Organizar todos os jogos por nome em ordem alfabetica
jogos.sort((a, b) => {
    return a.nomeJogo.localeCompare(b.nomeJogo);
});

// Area responsavel por preencher o html com algo ---------------------|
listaResultado.innerHTML = `<div class="semConteudo">Pesquise algo...</div>`
jogoDetalhado.innerHTML = `<div class="semConteudo">Selecione um item...</div>`
// --------------------------------------------------------------------|

//================= FUNÇÕES ===============================

//Exibir todos os itens do banco de dados
function todos() {
    if (!resultadosPreenchidos) {
        let i = 0
        for (let item of jogos){
            i++
            resultados +=`
            <div class="jogos">
            <h2 id="maisDetalhes${i}">> ${item.nomeJogo}</h2>
            <p>- ${item.categoria} -</p>
            <p>${item.curiosidade}</p>
            </div>
            `;
        }
        listaResultado.innerHTML = resultados
        console.log('Lista preencida!');
        
    }
    else{
        console.log('Lista ja foi renderizada!')
    }
    resultadosPreenchidos = true
}

//Exibir detalhes do jogo selecionado


