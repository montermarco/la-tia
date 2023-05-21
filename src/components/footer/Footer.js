import React from "react";
import styled from "styled-components";
import { Location, Phone } from "../icons/Icons";
import { colors, setFlex } from "../../utils/styles";

const FooterBase = ({ className }) => {
  return (
    <div className={className}>
      <p>
        <Location /> Manuel Maria Contreras 20
      </p>
      <p>
        <Phone /> 55.66.77.88.99
      </p>
    </div>
  );
};

const Footer = styled(FooterBase)`
  width: 90%;
  margin: 0 auto;
  color: ${colors.text2};
  font-size: 12px;
  ${setFlex({ x: "space-between" })};
`;

export default Footer;
