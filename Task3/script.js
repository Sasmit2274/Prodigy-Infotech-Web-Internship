const board = document.getElementById('board');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');

let currentPlayer = 'X';
let cells = Array(9).fill(null);
let isGameOver = false;

function createBoard() {
  board.innerHTML = '';
  cells.forEach((cell, i) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.dataset.index = i;
    div.innerText = cell ? cell : '';
    div.addEventListener('click', handleMove);
    board.appendChild(div);
  });
  updateStatus();
}

function handleMove(e) {
  const index = e.target.dataset.index;
  if (cells[index] || isGameOver) return;

  cells[index] = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  createBoard();
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // cols
    [0,4,8], [2,4,6]           // diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      statusText.innerText = `🎉 Player ${cells[a]} wins!`;
      isGameOver = true;
      return;
    }
  }

  if (!cells.includes(null)) {
    statusText.innerText = "🤝 It's a Draw!";
    isGameOver = true;
  }
}

function updateStatus() {
  if (!isGameOver) statusText.innerText = `Player ${currentPlayer}'s turn`;
}

restartBtn.addEventListener('click', () => {
  cells = Array(9).fill(null);
  isGameOver = false;
  currentPlayer = 'X';
  createBoard();
});

createBoard();
