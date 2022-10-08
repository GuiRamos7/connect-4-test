import { boardRows } from 'const';
import { useRecoilState } from 'recoil';
import { boardState, gameOverState, playerState, statsState } from 'state';

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(''));

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);
  const [wins, setWins] = useRecoilState(statsState);

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    const row = newBoard[col].length - 1;

    // Checks who wins and add one point
    if (
      testWin(newBoard[col]) || // Did win vertically
      testWin(newBoard.map((col) => col[row] || 0)) // Did win horizontally
      // TODO: Did win diagonally
    ) {
      const playerWinner = player === 1 ? 'playerOne' : 'playerTwo';
      setGameOver(true);
      setWins({
        ...wins,
        [playerWinner]: wins[playerWinner] + 1,
      });
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
