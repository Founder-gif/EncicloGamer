const resultadosDiv = document.querySelector('.resultados');

jogos.sort((a, b) => {
    return a.nomeJogo.localeCompare(b.nomeJogo);
  });

jogos.forEach(jogo => {
    // Cria uma nova div para cada jogo
    const novaDiv = document.createElement('div');

    // Adiciona a classe "jogos" à nova div
    novaDiv.classList.add('jogos');

    // Adiciona o conteúdo da div
    novaDiv.innerHTML = `
        <h2>> ${jogo.nomeJogo}</h2>
        <p>- ${jogo.categoria} -</p>
        <p>${jogo.curiosidade}</p>
    `;

    // Adiciona a nova div à seção de resultados
    resultadosDiv.appendChild(novaDiv);
    console.log(resultadosDiv)
});