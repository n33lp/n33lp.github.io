let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameMode = 'player'; // 'player' or 'computer'
let difficulty = 'easy'; // 'easy', 'medium', 'hard'
const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('currentPlayer');
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function setMode(mode) {
    gameMode = mode;
    const plybtn = document.getElementById('player');
    const cmpbtn = document.getElementById('computer');
    const difficultySelection = document.getElementById('difficultySelection');
    
    if (mode === 'player') {
        cmpbtn.style.backgroundColor = 'black';
        plybtn.style.backgroundColor = '#6514d07e';
        difficultySelection.style.display = 'none'; // Hide difficulty buttons
    } else {
        cmpbtn.style.backgroundColor = '#6514d07e';
        plybtn.style.backgroundColor = 'black';
        difficultySelection.style.display = 'block'; // Show difficulty buttons
    }

    restartGame();
}

function minimax(newBoard, player) {
    const emptyCells = newBoard.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    
    if (checkWinForMinimax(newBoard, 'X')) {
        return { score: -10 };
    } else if (checkWinForMinimax(newBoard, 'O')) {
        return { score: 10 };
    } else if (emptyCells.length === 0) {
        return { score: 0 };
    }

    let moves = [];

    for (let i = 0; i < emptyCells.length; i++) {
        let move = {};
        move.index = emptyCells[i];
        newBoard[emptyCells[i]] = player;

        if (player === 'O') {
            let result = minimax(newBoard, 'X');
            move.score = result.score;
        } else {
            let result = minimax(newBoard, 'O');
            move.score = result.score;
        }

        newBoard[emptyCells[i]] = '';
        moves.push(move);
    }

    let bestMove;
    if (player === 'O') {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = moves[i];
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = moves[i];
            }
        }
    }

    return bestMove;
}


function setDifficulty(level) {
    difficulty = level;
    const easybtn = document.getElementById('easybtn');
    const mediumbtn = document.getElementById('mediumbtn');
    const hardbtn = document.getElementById('hardbtn');

    if (level === 'easy') {
        easybtn.style.backgroundColor = '#6514d07e';
        mediumbtn.style.backgroundColor = 'black';
        hardbtn.style.backgroundColor = 'black';
    } else if (level === 'medium') {
        easybtn.style.backgroundColor = 'black';
        mediumbtn.style.backgroundColor = '#6514d07e';
        hardbtn.style.backgroundColor = 'black';
    }
    else if (level === 'hard') {
        easybtn.style.backgroundColor = 'black';
        mediumbtn.style.backgroundColor = 'black';
        hardbtn.style.backgroundColor = '#6514d07e';
    }
    resetBoard();
}

function handleClick(event) {
    const index = event.target.dataset.index;
    if (!gameActive || board[index] !== '') return;
    
    board[index] = currentPlayer;
    event.target.textContent = currentPlayer;
    if (checkWin()) {
        displayWin();
    } else if (board.every(cell => cell !== '')) {
        currentPlayerDisplay.textContent = `Draw!`;
        currentPlayerDisplay.style.color = 'dodgerblue';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        currentPlayerDisplay.textContent = currentPlayer;
        if (gameMode === 'computer' && currentPlayer === 'O') {
            computerMove();
        }
    }
}

function computerMove() {
    setTimeout(() => {
        if (difficulty === 'easy') {
            easyMove();
        } else if (difficulty === 'medium') {
            if (!blockPlayer()) {
                easyMove();
            }
        } else if (difficulty === 'hard') {
            hardMove();
        }

        if (checkWin()) {
            displayWin();
        } else {
            currentPlayer = 'X';
            currentPlayerDisplay.textContent = currentPlayer;
        }
    }, 500);
}

function easyMove() {
    const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[randomIndex] = 'O';
    cells[randomIndex].textContent = 'O';
}

function blockPlayer() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] === 'X' && board[b] === 'X' && board[c] === '') {
            board[c] = 'O';
            cells[c].textContent = 'O';
            return true;
        }
        if (board[a] === 'X' && board[c] === 'X' && board[b] === '') {
            board[b] = 'O';
            cells[b].textContent = 'O';
            return true;
        }
        if (board[b] === 'X' && board[c] === 'X' && board[a] === '') {
            board[a] = 'O';
            cells[a].textContent = 'O';
            return true;
        }
    }
    return false;
}

function hardMove() {
    const bestMove = minimax(board, 'O');
    board[bestMove.index] = 'O';
    cells[bestMove.index].textContent = 'O';
}

function checkWinForMinimax(board, player) {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === player);
    });
}



function findBestMove() {
    const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        if (pattern.every(index => board[index] === currentPlayer)) {
            drawWinLine(pattern);
            return true;
        }
        return false;
    });
}

function drawWinLine(pattern) {
    let [start, middle, end] = pattern;
    let startElement = cells[start].getBoundingClientRect();
    let endElement = cells[end].getBoundingClientRect();
    let boardElement = document.querySelector('.board').getBoundingClientRect();
    
    let winLine = document.createElement('div');
    winLine.classList.add('win-line');
    document.querySelector('.board').appendChild(winLine);

    let isHorizontal = startElement.top === endElement.top;
    let isVertical = startElement.left === endElement.left;
    let isDiagonal = !isHorizontal && !isVertical;

    if (isDiagonal){
        startElement = cells[0].getBoundingClientRect();
        endElement = cells[8].getBoundingClientRect();
    }
    

    if (isHorizontal) {
        winLine.style.width = `${endElement.right - startElement.left}px`;
        winLine.style.top = `${startElement.top - boardElement.top + startElement.height / 2 - 7}px`;
        winLine.style.left = `${startElement.left - boardElement.left}px`;
    } else if (isVertical) {
        winLine.style.width = `${endElement.bottom - startElement.top}px`;
        winLine.style.transform = `rotate(90deg)`;
        winLine.style.top = `${(endElement.bottom - startElement.top)/2 - 6}px`;
        winLine.style.left = `${startElement.left - boardElement.left - ((endElement.bottom - startElement.top)/2) + startElement.width/2}px`;
        
    } else if (isDiagonal) {
        width = Math.sqrt(Math.pow(endElement.right - startElement.left, 2) + Math.pow(endElement.bottom - startElement.top, 2)) - 8;
        winLine.style.width = `${width}px`;
        winLine.style.top = `${(endElement.bottom - startElement.top)/2 - 6}px`;
        winLine.style.left = `${(boardElement.width/2) - (width/2)}px`;
        (start < 1) ? winLine.style.transform = `rotate(45deg)` : winLine.style.transform = `rotate(-45deg)`;

    }
}

function displayWin() {
    currentPlayerDisplay.textContent = `${currentPlayer} wins!`;
    currentPlayerDisplay.style.color = 'dodgerblue';
    gameActive = false;
}

function resetBoard() {
    board.fill('');
    cells.forEach(cell => (cell.textContent = ''));
    currentPlayer = 'X';
    currentPlayerDisplay.style.color = 'white';
    currentPlayerDisplay.textContent = currentPlayer;
    gameActive = true;
    document.querySelectorAll('.win-line').forEach(line => line.remove());
}

function restartGame() {
    resetBoard();
    if (gameMode === 'computer' && currentPlayer === 'O') {
        computerMove();
    }
}
