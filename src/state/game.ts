import { boardCols } from 'const';
import { atom } from 'recoil';
import { Board, Player, Stats } from 'types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const statsState = atom<Stats>({
  key: 'statsState',
  default: { playerOne: 0, playerTwo: 0 },
  effects_UNSTABLE: [persistAtom],
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
