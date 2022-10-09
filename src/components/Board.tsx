import { Circle, Flex } from '@chakra-ui/react';
import { boardRows, playerColor } from 'const';
import { usePlayPiece } from 'hooks';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { boardState, gameModeState, gameOverState, playerState } from 'state';
import { Player } from 'types';

const padCol = (col: number[]): number[] =>
  col.join('').padEnd(boardRows, '0').split('').map(Number);

const Board: FC = () => {
  const play = usePlayPiece();
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const gameMode = useRecoilValue(gameModeState);
  const [lastPositionPlay, setLastPositionPlay] = useState(1);

  useEffect(() => {
    console.log(board);
    if (gameMode === 'bot' && player === 2) {
      const min = lastPositionPlay === 1 ? 1 : lastPositionPlay - 1;
      play(Math.floor(Math.random() * (lastPositionPlay + 1 - min) + min));
    }
  }, [player]);

  return (
    <Flex justify='center'>
      {board.map((col, i) => (
        <Flex
          key={i}
          role='group'
          onClick={() => {
            play(i);
            setLastPositionPlay(i);
          }}
          flexDirection='column-reverse'
          cursor={gameOver ? 'auto' : 'pointer'}
        >
          {padCol(col).map((p, j) => (
            <Circle
              m={1}
              size='40px'
              key={`${i}-${j}`}
              boxShadow='inner'
              bg={playerColor[p as Player] || 'gray.300'}
            />
          ))}
          <Circle
            m={1}
            size='40px'
            boxShadow='base'
            visibility='hidden'
            bg={playerColor[player]}
            _groupHover={{
              visibility: gameOver ? 'hidden' : 'visible',
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Board;
