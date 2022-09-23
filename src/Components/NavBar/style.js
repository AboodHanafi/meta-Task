import { Stack } from "@mui/system";
import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../globalStyles";

export const NavBarWrapper = styled(Stack)`
  height: 80px;
  justify-content: space-between;
`;

export const LeftSide = styled(FlexRow)`
  width: 10%;
  height: 100px;
  justify-content: start;
`;

export const RightSide = styled(FlexRow)`
  width: 50%;
  height: 100%;
  justify-content: end;
  margin-right: 100px;
  gap: 20px;
`;

export const TypographyWrapper = styled(FlexColumn)`
  width: 50%;
  height: 100%;
  align-items: end;
`;
