import { Button, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { boardState, gameModeState, gameOverState, playerState } from 'state';

const GameControls: FC = () => {
  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);
  const [gameMode, setGameMode] = useRecoilState(gameModeState);

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
  };

  return (
    <Flex gap='2'>
      <Button
        onClick={() => {
          setGameMode(gameMode === 'multiplayer' ? 'bot' : 'multiplayer');
          handleReset();
        }}
        colorScheme='blue'
      >
        {gameMode === 'multiplayer' ? 'Play against bot ' : 'Play multiplayer'}
      </Button>
      <Button
        onClick={handleReset}
        isDisabled={!board.some((col) => col.length)}
      >
        Reset
      </Button>
    </Flex>
  );
};

export default GameControls;
