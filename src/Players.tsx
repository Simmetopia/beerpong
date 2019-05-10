import React, { FC, useState, FormEvent } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { useGameState, ACTIONS } from "./BeerPongGame";

export const Players: FC = function() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, dispatch] = useGameState();
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(state, "submitted");
    dispatch({ type: ACTIONS.ADD_PLAYER, payload: { name, email } });
  }
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography align="center">Add players to beerpong here!</Typography>
      </Grid>
      <Grid item>
        <form onSubmit={onSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="row"
            spacing={1}
          >
            <Grid item>
              <TextField
                variant="outlined"
                label="Name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" type="submit">
                Add player
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
