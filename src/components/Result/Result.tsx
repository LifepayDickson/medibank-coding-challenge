import * as React from "react";
import {
  StyledResultHeaderText,
  StyledResult,
  StyledResultOwner,
} from "./StyledResult";
import { GenderOwnersPet } from "../../types";

type Props = {
  results?: GenderOwnersPet;
};

const Result: React.FC<Props> = ({ results }) => {
  return (
    <StyledResult>
      <StyledResultHeaderText>Male</StyledResultHeaderText>
      <div>
        {results?.maleCatList?.map((item, i) => {
          return (
            <StyledResultOwner gender={item.ownerGender} key={i}>
              <p>Pet: {item.name}</p>
              <p>Type: {item.type}</p>
              <p>Owner: {item.ownerName}</p>
            </StyledResultOwner>
          );
        })}
      </div>
      <StyledResultHeaderText>Female</StyledResultHeaderText>
      <div>
        {results?.femaleCatList?.map((item, i) => {
          return (
            <StyledResultOwner gender={item.ownerGender} key={i}>
              <p>Pet: {item.name}</p>
              <p>Type: {item.type}</p>
              <p>Owner: {item.ownerName}</p>
            </StyledResultOwner>
          );
        })}
      </div>
    </StyledResult>
  );
};

export default Result;
