import React, { createContext, Dispatch, FC, useContext, useReducer } from 'react';

export enum ACTIONS {
  'ADD_PLAYER',
  'REMOVE_PLAYER',
  'ADD_SCORE',
}

type actions = {
  type: ACTIONS;
  payload: any;
};

export type player = {name: string; email: string};

type state = {
  players: player[];
  games: {id: string; name: string; score: number[]}[];
};

export const defaultState: state = {players: [], games: []};

export function reducer(state: state, action: actions) {
  switch (action.type) {
    case ACTIONS.ADD_PLAYER: {
      return {...state, players: [...state.players, action.payload]};
    }
    case ACTIONS.REMOVE_PLAYER: {
      return {...state};
    }
    case ACTIONS.ADD_SCORE: {
      return {...state};
    }
    default: {
      let typeGuard: never = action.type;
      return typeGuard;
    }
  }
}
type returnType = [state, Dispatch<actions>];
export const GameStateContext = createContext<returnType | undefined>(
  undefined,
);
export type GameStateProviderProps = {
  reducer: (state: state, action: actions) => state;
  initialState: state;
};
export const GameStateProvider: FC<GameStateProviderProps> = function({
  children,
  reducer,
  initialState,
}) {
  return (
    <GameStateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GameStateContext.Provider>
  );
};
// @ts-ignore
export const useGameState = () => useContext<returnType>(GameStateContext);
