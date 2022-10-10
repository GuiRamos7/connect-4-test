import { boardCols } from 'const';
import { atom } from 'recoil';
import { Board, Player, PlayerConfig, Stats } from 'types';
import { recoilPersist } from 'recoil-persist';
import { playerColor, playerName } from 'const';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

export const statsState = atom<Stats>({
  key: 'statsState',
  default: { playerOne: 0, playerTwo: 0, draws: 0 },
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
  effects_UNSTABLE: [persistAtom],
});

export const gameOverState = atom<boolean>({
  key: 'gameOverState',
  default: false,
});

export const gameModeState = atom<'bot' | 'multiplayer'>({
  key: 'gameMode',
  default: 'multiplayer',
  effects_UNSTABLE: [persistAtom],
});

export const playersConfigState = atom<PlayerConfig>({
  key: 'playersConfig',
  default: {
    playerOne: {
      color: '#8867fb',
      name: 'Player one',
    },
    playerTwo: {
      color: '#ec49b2',
      name: 'Player two',
    },
  },
  effects_UNSTABLE: [persistAtom],
});
