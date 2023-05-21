import styled from "styled-components";
import { colors } from "../../utils/styles";
import { LocationDot } from "@styled-icons/fa-solid/LocationDot";
import { OldPhone } from "@styled-icons/entypo/OldPhone";

export const Location = styled(LocationDot)`
  color: ${colors.clearText};
  width: 12px;
  height: 12px;
`;

export const Phone = styled(OldPhone)`
  color: ${colors.clearText};
  width: 12px;
  height: 12px;
`;
