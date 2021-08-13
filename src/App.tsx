import React from "react";
import { StyledMain, StyledHeader, StyledHeaderText, StyledImg } from "./StyledApp"
import Home from "./views/Home"
import Logo from "./assets/medibank-logo.png"
import "./App.css";

// Delaring Function Component Type for App.js and Adding Styled Components onto respective HTML Tags
const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={Logo} alt={'Medibank Logo'} />
        <StyledHeaderText>Display Owners Pet By Gender</StyledHeaderText>
      </StyledHeader>
      <Home />
    </StyledMain>
  );
}

export default App;
