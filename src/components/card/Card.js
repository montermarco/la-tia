import React from "react";
import { StyledCard } from './StyledCard';

const Card = ({ dish }) => {
  const { name, description, price } = dish;

  return (
    <StyledCard>
      <div className="card-header">
        <p>{name}</p>
        <span>$ {price}</span>
      </div>
      <p className="card-description">{description}</p>
    </StyledCard>
  );
};

export default Card;
