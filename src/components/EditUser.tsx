import {
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

const EditUser = () => {
  return (
    <Modal isOpen={false} onClose={() => {}}>
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
          <Text as='h1' fontWeight='bold' fontSize='2xl'>
            Edit
          </Text>
          Player one name:
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default EditUser;
