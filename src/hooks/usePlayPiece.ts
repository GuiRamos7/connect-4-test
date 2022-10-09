import { boardRows } from 'const';
import { useRecoilState } from 'recoil';
import {
  boardState,
  gameModeState,
  gameOverState,
  playerState,
  statsState,
} from 'state';

const testWin = (arr: number[][]): boolean =>
  /([12])(\1{3}|(.{5}\1){3}|(.{6}\1){3}|(.{7}\1){3})/.test(
    arr.map((col) => col.join('').padEnd(6, '0')).join(',')
  );
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
      testWin(newBoard)
      // Did win vertically
      // Did win horizontally
      // Did win diagonally
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
