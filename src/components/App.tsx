import React, { Suspense } from 'react';
import { ChakraProvider, Container, VStack } from '@chakra-ui/react';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { theme } from 'styles/theme';

const Board = React.lazy(() => import('components/Board'));
const GameControls = React.lazy(() => import('components/GameControls'));
const GameProgress = React.lazy(() => import('components/GameProgress'));

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <Container py={4} as={VStack} w={['100%', '570px']}>
          <Board />
          <GameProgress />
          <GameControls />
        </Container>
      </RecoilRoot>
    </Suspense>
  </ChakraProvider>
);

export default App;
