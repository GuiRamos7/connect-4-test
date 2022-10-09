import {
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { playerName } from 'const';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { statsState } from 'state';

interface IGameStatsProps {
  isOpen: boolean;
  onClose: () => void;
}

const GameStats: FC<IGameStatsProps> = ({ onClose, isOpen }) => {
  const stats = useRecoilValue(statsState);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='gray.700'>
        <Flex
          bg='gray.700'
          justify='center'
          p='4'
          borderRadius='10'
          flexDir='column'
          align='start'
        >
          <Text as='h1' fontWeight='bold' fontSize='2xl' textAlign='center'>
            Stats
          </Text>
          <Flex flexDir='column' align='start'>
            <Text as='p' fontSize='xl' textAlign='center'>
              {playerName[1]} stats: {stats.playerOne}
            </Text>
            <Text as='p' fontSize='xl' textAlign='center'>
              {playerName[2]} stats: {stats.playerTwo}
            </Text>
            <Text as='p' fontSize='xl' textAlign='center'>
              Draws stats: {stats.draws}
            </Text>
          </Flex>
        </Flex>
      </ModalContent>
      {/* <Flex
        bg='gray.700'
        justify='center'
        p='4'
        borderRadius='10'
        flexDir='column'
        align='start'
      >
        <Text as='h1' fontWeight='bold' fontSize='2xl' textAlign='center'>
          Stats
        </Text>
        <Flex flexDir='column' align='start'>
          <Text as='p' fontSize='xl' textAlign='center'>
            {playerName[1]} stats: {stats.playerOne}
          </Text>
          <Text as='p' fontSize='xl' textAlign='center'>
            {playerName[2]} stats: {stats.playerTwo}
          </Text>
          <Text as='p' fontSize='xl' textAlign='center'>
            Draws stats: {stats.draws}
          </Text>
        </Flex>
      </Flex> */}
    </Modal>
  );
};

export default GameStats;
