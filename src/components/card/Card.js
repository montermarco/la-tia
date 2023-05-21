import React from "react";
import styled from "styled-components";
import { colors, setFlex } from "../../utils/styles";

const CardBase = ({ className, dish }) => {
  const { name, description, price } = dish;
  return (
    <div className={className}>
      <div className="card-header">
        <p>{name}</p>
        <span>$ {price}</span>
      </div>
      <span className="card-description">{description}</span>
    </div>
  );
};

const Card = styled(CardBase)`
  width: 95%;
  margin-bottom: 2rem;

  .card-header {
    ${setFlex({ x: "space-between" })};
    color: ${colors.green};
    p {
      font-family: "Montserrat Alternates", sans-serif;
      font-weight: bold;
    }
    padding: 0;
    margin: 0;
  }

  .card-description {
    font-size: 14px;
  }
`;

export default Card;
