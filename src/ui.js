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

function markSquare(square, isHit) {
    if (isHit === undefined) {
        return
    } else if (isHit) {
        square.classList.add('hitted', 'disabled')
    } else if (!isHit) {
        square.classList.add('notHitted', 'disabled')
    } else {
        return
    }
}

function clearBoards(boardContainer) {
    const squares = boardContainer.querySelectorAll('.square')
    squares.forEach((square) => {
        square.classList.remove('hitted', 'notHitted', 'disabled', 'player-ships')
    })
}

function showPlayerBoard(playerBoardContainer, grid) {
    grid.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell !== null) {
                const targetSquare = playerBoardContainer.querySelector(`.square[data-x="${x}"][data-y="${y}"]`)
                targetSquare.classList.add('player-ships')
            }
        })
    })
}


export { createBoard, markSquare, clearBoards, showPlayerBoard }