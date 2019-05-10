import React, {FC} from 'react';
import {useGameState, player} from './BeerPongGame';
import {PlayerCard} from './PlayerCard';
import { Grid } from '@material-ui/core';

export const GameBoard: FC = function() {
  const [state] = useGameState();
  return (
      <Grid container spacing={2}>
        {state.players.map((p: player, i:number) => (
          <Grid key={i} item md={1}>
            <PlayerCard {...p} />
          </Grid>
        ))}
      </Grid>
  );
};
