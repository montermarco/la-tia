import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/styles";

function HeaderBase({ className, title = "La tía" }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <h2>Menú del día</h2>
    </div>
  );
}

const Header = styled(HeaderBase)`
  width: 100%;
  text-align: center;

  h1 {
    font-family: "Lobster", cursive;
    color: ${colors.green};
  }

  h2 {
    font-family: "Courgette", cursive;
    color: ${colors.dark};
  }
`;

export default Header;
