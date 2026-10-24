function createBoard(gameboard) {
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const square = document.createElement('div')
            square.dataset.x = x
            square.dataset.y = y
            square.classList.add('square')
            gameboard.appendChild(square)
        }
    }
}



export { createBoard }