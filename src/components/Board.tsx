import { Circle, Flex, chakra, shouldForwardProp } from '@chakra-ui/react';
import { boardRows, playerColor } from 'const';
import { usePlayPiece } from 'hooks';
import { FC, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { boardState, gameModeState, gameOverState, playerState } from 'state';
import { Player } from 'types';
import { motion, isValidMotionProp } from 'framer-motion';

const padCol = (col: number[]): number[] =>
  col.join('').padEnd(boardRows, '0').split('').map(Number);

const Board: FC = () => {
  const MotionCircle = motion(Circle);

  const play = usePlayPiece();
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const gameMode = useRecoilValue(gameModeState);
  const [lastPositionPlay, setLastPositionPlay] = useState(1);

  useEffect(() => {
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
            <MotionCircle
              animate={{
                scale: [1, 1.05, 1],
              }}
              m={1}
              size='40px'
              key={`${i}-${j}`}
              boxShadow='inner'
              bg={playerColor[p as Player] || 'gray.700'}
            />
          ))}
          <MotionCircle
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
