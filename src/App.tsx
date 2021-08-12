import React from "react";
import { StyledMain, StyledHeader, StyledHeaderText } from "./StyledApp"
import Home from "./views/Home"
import "./App.css";

const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeaderText>Output a list of all the cats in alphabetical order under a heading of the gender of their owner</StyledHeaderText>
      </StyledHeader>
      <Home />
    </StyledMain>
  );
}

export default App;
