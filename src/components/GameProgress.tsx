import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import {
  boardState,
  gameOverState,
  playersConfigState,
  playerState,
} from 'state';

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const board = useRecoilValue(boardState);
  const gameOver = useRecoilValue(gameOverState);
  const gameConfig = useRecoilValue(playersConfigState);
  const name = gameConfig[player === 1 ? 'playerOne' : 'playerTwo'].name;

  return (
    <Heading as='h3' size='lg'>
      {board.flat().length === 42 && 'Draw'}
      {board.flat().length !== 42 &&
        (gameOver ? `${name} wins!` : `${name}'s turn`)}
    </Heading>
  );
};

export default GameProgress;
