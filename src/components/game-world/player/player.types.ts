export interface PlayerProps {}

export enum PlayerControls {
  FORWARD = 'W',
  BACKWARDS = 'S',
  LEFT = 'A',
  RIGHT = 'D',
  UP = 'C',
  DOWN = 'Z',
}

export interface ActiveControls {
  [PlayerControls.FORWARD]?: boolean;
  [PlayerControls.BACKWARDS]?: boolean;
  [PlayerControls.LEFT]?: boolean;
  [PlayerControls.RIGHT]?: boolean;
  [PlayerControls.UP]?: boolean;
  [PlayerControls.DOWN]?: boolean;
}
