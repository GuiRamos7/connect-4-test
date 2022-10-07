import { boardCols } from 'const';
import { atom } from 'recoil';
import { Board, Player } from 'types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

export const boardState = atom<Board>({
  key: 'boardState',
  default: Array(boardCols).fill([]),
  effects_UNSTABLE: [persistAtom],
});

export const playerState = atom<Player>({
  key: 'playerState',
  default: 1,
});

export const gameOverState = atom<boolean>({
  key: 'gameOverState',
  default: false,
});
