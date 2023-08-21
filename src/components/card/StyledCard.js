import React from "react";
import styled from 'styled-components';
import { colors, setFlex } from '../../utils/styles';

export const StyledCard = styled.div`
  width: 95%;
  margin-bottom: 2rem;
  border-bottom: solid 1px ${colors.gray};

  .card-header {
    ${setFlex({ x: 'space-between' })};
    color: ${colors.green};
    p {
      font-family: 'Montserrat Alternates', sans-serif;
      font-weight: bold;
    }
    padding: 0;
    margin: 0;
  }

  .card-description {
    font-size: 14px;
    padding-bottom: 1rem;
    margin-bottom: 0.5rem;
  }
`;
