import { Heading } from '@chakra-ui/react';
import { playerName } from 'const';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { boardState, gameOverState, playerState } from 'state';

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const board = useRecoilValue(boardState);
  const gameOver = useRecoilValue(gameOverState);
  const name = playerName[player];

  return (
    <Heading as='h3' size='lg'>
      {board.flat().length === 42 && 'Draw'}
      {board.flat().length !== 42 &&
        (gameOver ? `${name} wins!` : `${name}'s turn`)}
    </Heading>
  );
};

export default GameProgress;
