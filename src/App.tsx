import React from "react";
import {
  StyledMain,
  StyledHeader,
  StyledHeaderText,
  StyledImg,
} from "./StyledApp";
import Home from "./views/Home";
import Logo from "./assets/medibank-logo.png";

// Delaring Function Component Type for App.js and Adding Styled Components onto respective HTML Tags
const App: React.FC = () => {
  return (
    <StyledMain>
      <StyledHeader>
        <StyledImg src={Logo} alt={"Medibank Logo"} />
        <StyledHeaderText>Display Cats Alphabetically By Owners Gender</StyledHeaderText>
      </StyledHeader>
      <Home />
    </StyledMain>
  );
};

export default App;
