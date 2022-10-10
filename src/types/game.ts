export type Player = 1 | 2;
export type Board = Player[][];
export type Stats = {
  playerOne: number;
  playerTwo: number;
  draws: number;
};

export type PlayerConfig = {
  playerOne: {
    color: string;
    name: string;
  };
  playerTwo: {
    color: string;
    name: string;
  };
};
