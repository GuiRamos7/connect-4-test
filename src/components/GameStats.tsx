import { Flex, Text } from '@chakra-ui/react';
import { playerName } from 'const';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { statsState } from 'state';

const GameStats: FC = () => {
  const stats = useRecoilValue(statsState);

  return (
    <Flex
      w='65%'
      bg='gray.300'
      justify='center'
      p='2'
      borderRadius='10'
      flexDir='column'
      align='start'
    >
      <Text as='h1' fontWeight='bold' fontSize='2xl' textAlign='center'>
        Stats
      </Text>
      <Flex flexDir='column' align='start'>
        <Text as='p' fontWeight='bold' fontSize='xl' textAlign='center'>
          {playerName[1]} stats: {stats.playerOne}
        </Text>
        <Text as='p' fontWeight='bold' fontSize='xl' textAlign='center'>
          {playerName[2]} stats: {stats.playerTwo}
        </Text>
        <Text as='p' fontWeight='bold' fontSize='xl' textAlign='center'>
          Draws stats: {stats.draws}
        </Text>
      </Flex>
    </Flex>
  );
};

export default GameStats;
