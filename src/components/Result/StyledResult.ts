import styled from "styled-components";

interface StyledResultOwnerProps {
  gender?: string;
}

export const StyledResultHeaderText = styled.h1`
  font-size: 28px;
  line-height: 32px;
`;

export const StyledResult = styled.div`
  min-width: 100%;
`;

export const StyledResultOwner = styled.div`
  box-sizing: border-box;
  border-radius: 25px;
  min-width: 100%;
  margin: 1rem 0;
  padding: 0 1rem;
  border: 1px solid
    ${(props: StyledResultOwnerProps) =>
      props.gender === "Male" ? "aqua" : "pink"};
`;
