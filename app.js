// ====================== VARIAVEIS ======================
//----------- Variaveis de elemento ------------
let divResultados = document.getElementById("lista-resultado")
let detalhesJogo = document.getElementById("detalhesJogo")
let inputBusca = document.getElementById("inputBusca")
let listaJogos = jogos
//----------- Variaveis de controle ------------
let termoBusca = ''
let resultados = ''
let nomeJogo = ''
let categJogo = ''
let descJogo = ''
let i = ''

// ------Area para informar ações ao usuario--------------
divResultados.innerHTML = ` <div class="semConteudo">Pesquise Algo...</div>`
detalhesJogo.innerHTML = ` <div class="semConteudo">Selecione um item...</div>`
// -------------------------------------------------------

// ====================== FUNÇÕES ========================
listaJogos.sort((a,b) => {
    return a.nome.localeCompare(b.nome)
})


function buscar() {
    //---------- Limpar areas de resultados-----------
    divResultados.innerHTML = ``
    resultados = ``
    //---------- Guardar informações -----------------
    termoBusca = inputBusca.value.toLowerCase()
    //---------- Verificar e printar informações -----
    verificarBusca(termoBusca)
}

function verificarBusca(texto) {
    // Inicia um looping para verificar a lista
    //Incrementa o valor 0 para i. i serve para criar um indice
    i = 0
    for (let item of jogos) {
        // Normaliza todos os valores para lowerCase
        nomeJogo = item.nome.toLowerCase()
        categJogo = item.categoria.toLowerCase()
        descJogo = item.descricao.toLowerCase()
        //Verifica se o termo busca esta em algum lugar no banco de dados
        if (nomeJogo.includes(termoBusca) || categJogo.includes(termoBusca) || descJogo.includes(termoBusca) || item.ano.includes(termoBusca)) {
            //Adiciona uma div com os dados do jogo
            resultados += `
            <div class="jogos" onclick="descricaoJogo(${i})">
                <h2>> ${item.nome}</h2>
                <h3>${item.curiosidade}</h3>
                <p>Categoria: ${categJogo}</p>
                <p>Lançamento: ${item.ano}</p>
            </div>
            `
        }
        //Incrementa i com +1
        i++
    }
    //Adiciona todas as div's criadas para dentro do html
    divResultados.innerHTML = resultados
}

function descricaoJogo(indece) {

    detalhesJogo.innerHTML = `
        <div class="detalhesJogo">
            <div class="headerJogo">
                <div class="capa">   
                    <img src="${jogos[indece].capa}">
                </div>
                <div class="textoHeader">   
                    <h2>${jogos[indece].nome}</h2>
                    <p>Categoria: ${jogos[indece].categoria}</p>
                    <p>Desenvolvedora: ${jogos[indece].desenvolvedora}</p>
                    <p>Lançamento: ${jogos[indece].ano}</p>
                </div>
            </div>
            <div class="descricaoJogo">
                <p>${jogos[indece].descricao}</p>
            </div>
        </div>
    `

    
}