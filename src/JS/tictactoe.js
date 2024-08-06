let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameMode = 'player'; // 'player' or 'computer'
const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('currentPlayer');
const gameModeDisplay = document.getElementById('gameModeDisplay');
let gameActive = true;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function setMode(mode) {
    gameMode = mode;
    const plybtn = document.getElementById('player');
    const cmpbtn = document.getElementById('computer');
    if (mode === 'player') {
        cmpbtn.style.backgroundColor = 'black';
        plybtn.style.backgroundColor = '#6514d07e';
    } else {
        cmpbtn.style.backgroundColor = '#6514d07e';
        plybtn.style.backgroundColor = 'black';
    }


    restartGame();
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
        const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
        const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[randomIndex] = 'O';
        cells[randomIndex].textContent = 'O';
        if (checkWin()) {
            displayWin();
        } else {
            currentPlayer = 'X';
            currentPlayerDisplay.textContent = currentPlayer;
        }
    }, 500);
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
            // colourWinBoxes(pattern)
            return true;
        }
        return false;
    });
}

function colourWinBoxes(pattern) {
    const [first, second, third] = pattern;
    cells[first].style.backgroundColor = 'coral';
    cells[second].style.backgroundColor = 'coral';
    cells[third].style.backgroundColor = 'coral';
    cells[first].style.color = 'black';
    cells[second].style.color = 'black';
    cells[third].style.color = 'black';

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
