import * as React from "react";
import { render } from "react-dom";
import { Players } from "./Players";
import { ThemeProvider } from "@material-ui/styles";
import { Theme, createMuiTheme } from "@material-ui/core";
import { GameStateProvider, defaultState, reducer } from "./BeerPongGame";
import { GameBoard } from "./GameBoard";

const theme: Theme = createMuiTheme({
  typography: { fontFamily: "Montserrat" }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GameStateProvider reducer={reducer} initialState={defaultState}>
        <GameBoard />
        <Players />
      </GameStateProvider>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
