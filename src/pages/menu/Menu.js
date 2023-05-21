import React from "react";
import styled from "styled-components";
import { colors, elevation } from "../../utils/styles";
import Acordion from "../../components/acordion/Acordion";
import { dishes } from "../../utils/testdata";

const DISH_TYPES = {
  BREAKFAST: "Desayuno",
  MEAL: "Comida",
  DINNER: "Cena",
  DESERT: "Postre",
  CRAVING: "Antojo",
  DRINK: "Bebida",
};

function MenuBase({ className }) {
  const dishesByType = dishes.reduce((result, dish) => {
    result[dish.type] = [...(result[dish.type] || []), dish];
    return result;
  }, {});

  return (
    <div className={className}>
      {Object.entries(DISH_TYPES).map(([dishTypeKey, dishType]) => (
        <Acordion
          key={dishTypeKey}
          dishesByType={dishesByType[dishType]}
          type={`${dishType}s`}
        />
      ))}
    </div>
  );
}

const Menu = styled(MenuBase)`
  width: 90%;
  height: 70vh;
  margin: 0.5rem auto;
  padding-top: 1.5rem;
  ${elevation[2]};
  color: ${colors.dark};
  border-radius: 0.5rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
  overflow-y: auto;
`;

export default Menu;
