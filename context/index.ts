import React from 'react';


const LayoutDefault = {
  width: 1400,
  height: 500,
};

export const LayoutContext = React.createContext(LayoutDefault);

const BanPickDefault = {
  blue: {
    banned: [],
    picked: [],
  },
  red: {
    banned: [],
    picked: [],
  },
  setBlue: () => {},
  setRed: () => {},
}

export const BanPickContext = React.createContext(BanPickDefault);

const TimerDefault = {
  time: 5,
  leftTime: 5,
  setTime: () => {},
  timeTick: () => {},
}

export const TimerContext = React.createContext(TimerDefault);


const PhaseDefault = {
  phase: 1, // 20종
  setPhase: () => {}, 
}

export const PhaseContext = React.createContext(PhaseDefault);