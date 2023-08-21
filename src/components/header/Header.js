import React from "react";
import { StyledHeader } from "./StyledHeader";

function Header({ title = "La tía" }) {
  const date = new Date();
  const options = { weekday: "long", day: "numeric", month: "long" };
  const formattedDate = new Intl.DateTimeFormat("es-ES", options).format(date);

  return (
    <StyledHeader>
      <>
        <h1>{title}</h1>
        <h2>Menú del día</h2>
        <p>{formattedDate}</p>
      </>
    </StyledHeader>
  );
}

export default Header;
