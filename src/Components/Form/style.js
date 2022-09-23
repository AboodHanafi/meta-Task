import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../globalStyles";

export const SignUpWrapper = styled(FlexColumn)`
  width: 100%;
  min-height: 100vh;
  align-items: flex-start;
`;

export const FieldsSection = styled(FlexRow)`
  justify-content: space-around;
  width: 100%;
  height: 70vh;
`;

export const LeftSection = styled(FlexColumn)`
  justify-content: start;
  align-items: start;
  width: 70%;
  height: 70vh;
`;
export const Title = styled(FlexColumn)`
  width: 80%;
`;
export const TextFieldsWrapper = styled(FlexRow)`
  justify-content: start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 800px;
  gap: 20px;
`;
export const RightSection = styled(FlexColumn)`
  justify-content: start;
  align-items: start;
  width: 30%;
  height: 70vh;
`;
export const ImageSection = styled(FlexColumn)`
  justify-content: start;
  align-items: start;
  height: 500px;
`;

export const ButtonsSection = styled(FlexRow)`
  justify-content: start;
  align-items: flex-start;
  width: 40%;
  gap: 10px;
`;
