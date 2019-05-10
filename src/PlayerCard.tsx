import {Card, Typography, makeStyles} from '@material-ui/core';
import React, {FC} from 'react';
import {player} from './BeerPongGame';
const useStyles = makeStyles(theme => ({
  container: {
    ...theme.mixins.gutters(),
    backgroundColor: theme.palette.primary.main,
  },
  typo: {color: '#fff'},
}));
type PlayerCardProps = player;
export const PlayerCard: FC<PlayerCardProps> = function({name}) {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <Typography color="textSecondary" align="center" variant="h3">
        {name}
      </Typography>
    </Card>
  );
};
