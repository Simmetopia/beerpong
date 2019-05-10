import React, { FC } from "react";
import { useGameState } from "./BeerPongGame";
import { Typography } from "@material-ui/core";

export const GameBoard: FC = function() {
  const [state, dispatch] = useGameState();
  return (
    <>
      <Typography>{JSON.stringify(state.players)}</Typography>
    </>
  );
};
