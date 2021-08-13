import React from "react";
import { StyledMain, StyledHeader, StyledHeaderText } from "./StyledApp"
import Home from "./views/Home"
import "./App.css";

// Delaring Function Component Type for App.js and Adding Styled Components onto respective HTML Tags
const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledHeaderText>Medibank - Display Owners Pet By Gender</StyledHeaderText>
      </StyledHeader>
      <Home />
    </StyledMain>
  );
}

export default App;
