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
<<<<<<< HEAD
        square.classList.add('hitted')
    } else if (!isHit) {
        square.classList.add('notHitted')
=======
        square.classList.add('hitted', 'disabled')
    } else if (!isHit) {
        square.classList.add('notHitted', 'disabled')
>>>>>>> 2648f52 (feat(ui): handle attack clicks and mark square states)
    } else {
        return
    }
}


export { createBoard, markSquare }