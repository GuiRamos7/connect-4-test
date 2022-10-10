import {
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  Input,
  Button,
  Circle,
  FormLabel,
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';
import { FieldValues, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { playersConfigState } from 'state';
import { HexColorPicker } from 'react-colorful';
import { FC, useState } from 'react';

interface IColorPickerIsOpen {
  picker: 0 | 1 | 2;
}

interface IEditUserProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditUser: FC<IEditUserProps> = ({ isOpen, onClose }) => {
  const [playersConfig, setPlayersConfig] = useRecoilState(playersConfigState);
  const { register, handleSubmit } = useForm();
  const [colorPickerIsOpen, setColorPickerIsOpen] =
    useState<IColorPickerIsOpen>({ picker: 0 });

  const onSubmit = (data: FieldValues) => {
    setPlayersConfig({
      playerOne: {
        name: data.playerOne,
        color: playersConfig.playerOne.color,
      },
      playerTwo: {
        name: data.playerTwo,
        color: playersConfig.playerTwo.color,
      },
    });

    onClose();
  };

  const handleChangeColor = (
    color: string,
    player: 'playerOne' | 'playerTwo'
  ) => {
    setPlayersConfig({
      ...playersConfig,
      [player]: { color, name: playersConfig[player].name },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        border='4px solid'
        borderColor='gray.900'
        borderRadius='15px'
        bg='white.300'
      >
        <Flex
          as='form'
          bg='white.300'
          justify='center'
          p='4'
          borderRadius='10'
          flexDir='column'
          align='start'
          onSubmit={handleSubmit(onSubmit)}
        >
          <Text as='h1' fontWeight='bold' fontSize='2xl'>
            Edit
          </Text>

          <FormLabel position='relative'>
            <Text as='p' fontSize='md'>
              Player one name:
            </Text>
            <Flex align='center' gap='4'>
              <Input
                defaultValue={playersConfig.playerOne.name}
                {...register('playerOne')}
              />
              <Circle
                bg={playersConfig.playerOne.color}
                size='20px'
                cursor='pointer'
                onClick={() => setColorPickerIsOpen({ picker: 1 })}
              />
              {colorPickerIsOpen.picker === 1 && (
                <Flex position='absolute' top='24px' right='-215px'>
                  <AiOutlineClose
                    onClick={() => setColorPickerIsOpen({ picker: 0 })}
                    cursor='pointer'
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '-10px',
                    }}
                  />
                  <HexColorPicker
                    color={playersConfig.playerOne.color}
                    onChange={(color) => handleChangeColor(color, 'playerOne')}
                  />
                </Flex>
              )}
            </Flex>
          </FormLabel>

          <FormLabel position='relative'>
            <Text as='p' fontSize='md'>
              Player one name:
            </Text>
            <Flex align='center' gap='4'>
              <Input
                defaultValue={playersConfig.playerTwo.name}
                {...register('playerTwo')}
              />
              <Circle
                bg={playersConfig.playerTwo.color}
                size='20px'
                cursor='pointer'
                onClick={() => setColorPickerIsOpen({ picker: 2 })}
              />
              {colorPickerIsOpen.picker === 2 && (
                <Flex position='absolute' top='24px' right='-215px'>
                  <AiOutlineClose
                    onClick={() => setColorPickerIsOpen({ picker: 0 })}
                    cursor='pointer'
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '-10px',
                    }}
                  />
                  <HexColorPicker
                    color={playersConfig.playerTwo.color}
                    onChange={(color) => handleChangeColor(color, 'playerTwo')}
                  />
                </Flex>
              )}
            </Flex>
          </FormLabel>
          <Button
            mt='5'
            color='white.300'
            bg='purple.500'
            _hover={{
              opacity: 0.7,
            }}
            type='submit'
          >
            Submit
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default EditUser;
