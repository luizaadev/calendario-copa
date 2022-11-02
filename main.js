function createGame (player1, hour, player2) {
    return `
    <li>
       <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil">
       <strong>${hour}</strong>
       <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia">
    </li>
    `
}


function createCard (date, day, games) {
    return `
    <main id="cards">
        <div class="card">
            <h2>${date} <span>${day}</span></h2>

            <ul>
              ${games}
            </ul>

    </main>
    `
}

document.querySelector("#app").innerHTML = `

    <header>
       <img src="./assets/logo.svg" alt="Logo NLW">
    </header>

    <main id="cards">
       ${createCard('24/11', 'quinta', createGame('brazil', '16:00', 'serbia'))}
       ${createCard('28/11', 'segunda', createGame('brazil', '13:00', 'switzerland'))}
       ${createCard('02/12', 'sexta', createGame('brazil', '16:00', 'cameroon'))}
    </main>
`

