import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/styles";

export const StyledHeader = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    font-family: "Lobster", cursive;
    color: ${colors.green};
  }

  h2 {
    font-family: "Courgette", cursive;
    color: ${colors.dark};
    margin-bottom: 0px;
  }

  p {
    margin-top: 0px;
    color: ${colors.text2};
  }
`;