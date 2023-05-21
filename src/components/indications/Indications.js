import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/styles";

const MENU_INDICATIONS = {
  Desayunos:
    "Incluye: pan tostado, vaso de jugo, café o té, plato fuerte - 8:00 a 13:00hrs",
  Comidas:
    "Incluye: doradita, consome o sopa del día, arroz, pasta o ensalada, plato fuerte, un vaso con agua de sabor, café o té - 13:00 a 18:00hrs",
  Cenas:
    "Incluye: doradita, consome o sopa del día, arroz, pasta o ensalada, plato fuerte, un vaso con agua de sabor, café o té *Sujeto a disponibilidad - 18:00 a 21:00hrs",
  Bebidas: "No hay refill",
};

const IndicationsBase = ({ className, type }) => {
  return (
    <div className={className}>
      <p>{MENU_INDICATIONS[type]}</p>
    </div>
  );
};

const Indications = styled(IndicationsBase)`
  width: 95%;
  margin: 0 auto;
  color: ${colors.text2};
  font-style: italic;
  font-size: 14px;
`;

export default Indications;
