import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../globalStyles";

export const MainWrapper = styled(FlexColumn)`
`;

export const SearchSection = styled(FlexColumn)`
  justify-content: start;
  width: 100%;
`;

export const TextFieldsWrapper = styled(FlexRow)`
  width: 100%;
  justify-content: start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TableSection = styled(FlexColumn)`
  width: 100%;
`;
