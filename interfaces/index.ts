// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

const CHAMPION_STATUS = {
  NORMAL: 'Normal',
  PICKED: 'Picked',
  BANNED: 'Banned',
  SELECTED: 'Selected',
} as const;
type CHAMPION_STATUS = typeof CHAMPION_STATUS[keyof typeof CHAMPION_STATUS];


export type IChampion = {
  id?: string
  name?: string
  image?: any
  imageUrl?: string
  splashUrl?: string
  status: CHAMPION_STATUS
}

const BAN_STATUS = {
  NORMAL: 'Normal',
  SELECTING: 'Selecting',
  WAITING: 'Waiting'
} as const;
type BAN_STATUS = typeof BAN_STATUS[keyof typeof BAN_STATUS];

export type IBan = {
  banned: IChampion[];
  status: BAN_STATUS;
}

const PICK_STATUS = {
  NORMAL: 'Normal',
  SELECTING: 'Selecting',
  WAITING: 'Waiting'
} as const;
type PICK_STATUS = typeof PICK_STATUS[keyof typeof PICK_STATUS];

export type IPick = {
  picked: IChampion[];
  status: PICK_STATUS;
}

export type ITimer = {
  activate: boolean;
  time?: number;
}

export type IPhase = {
  phase: number;
}
