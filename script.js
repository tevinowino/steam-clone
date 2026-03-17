let gameContainer = document.getElementById('game-grid')

let games = [
    {
        name: "Cyberpunk Legacy",
        image: "images/cyberpunk.png",
        tags: ["Action", "RPG", "Sci-fi"],
        price: "$59.99"
    },
    {
        name: "Ethereal Realm",
        image: "images/fantasy.png",
        tags: ["Adventure", "Fantasy"],
        price: "$39.99"
    },
    {
        name: "Void Explorer",
        image: "images/space.png",
        tags: ["Simulation", "Space"],
        price: "Free"
    },
    {
        name: "The Lost Scroll",
        image: "images/fantasy.png",
        tags: ["Indie", "RPG"],
        price: "$14.99"
    },
    {
        name: "Neon Nights",
        image: "images/cyberpunk.png",
        tags: ["Action", "Racing"],
        price: "$24.99"
    },
    {
        name: "Starbound Horizon",
        image: "images/space.png",
        tags: ["Survival", "Space"],
        price: "$29.99"
    }
]

function displayGames() {
    console.log({games})
    games.forEach(game => {
        console.log({game})

    gameContainer.innerHTML += `
            <div class="game-card">
            <div class="card-img-container">
                <img src="${game.image}" alt="${game.name}">
            </div>
            <div class="card-info">
                <div class="game-title">${game.name}</div>
                <div class="tags">${game.tags.join(', ')}</div>
                <div class="game-meta">
                    <span class="price">${game.price}</span>
                    <div class="btn-add"><i class="fa-solid fa-plus"></i></div>
                </div>
            </div>
            </div>
        `

    })
}

displayGames()