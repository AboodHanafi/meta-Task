import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const Typography = styled("p")`
  width: 100%;
  display: flex;
  margin: 0;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => (props.color ? props.color : "#808080")};
  font-weight: ${(props) => props.fontWeight};

  @media screen and (max-width: 1100px) {
    font-size: ${(props) => props.fontSize - 6}px;
  }
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  /* background-color: green; */
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const Icon = styled(FlexBox)`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "40px")};
  background-color: ${(props) => props.backgroundColor};
  .MuiSvgIcon-root {
    fill: ${(props) => (props.fill ? props.fill : "#808080")};
    background-color: ${(props) => props.Bgc};
    cursor: pointer;
  }
`;

export const Image = styled.div((props) => ({
  width: props.width,
  height: props.height,
  background: props.background,
  margin: props.margin ? props.margin : "0",
  border: "1px solid #808080",
}));

export const CustomButton = styled(Button)`
  margin: ${(props) => (props.margin ? props.margin : "10px 0")} !important;
  padding: ${(props) => (props.padding ? props.padding : "10px 0")} !important;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#f2f2f2"} !important;
  color: ${(props) => (props.color ? props.color : "#808080")} !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 0 !important;
`;

export const CustomizedTextField = styled(TextField)`
  margin: 10px !important;
  width: 350px;
  min-width: 320px;
  background-color: #fff;
  border-radius: 15px;

  .MuiFilledInput-root {
    background-color: #fff;
    border-radius: 15px;
  }

  .MuiFilledInput-root::before {
    border: none;
  }

  .MuiFilledInput-root:after {
    border: none;
  }
  .MuiFilledInput-root:hover:not(.Mui-disabled):before {
    border: none;
    /* background-color: #e7e0e0; */
  }

  .MuiFilledInput-root:hover {
    background-color: #fff;
    border-radius: 15px;
  }
  .Mui-disabled {
    background-color: #e7e0e0;
    border-radius: 15px;
  }
  .MuiFilledInput-root.Mui-disabled:before {
    border: none;
    background-color: #e7e0e0;
    border-radius: 15px;
  }
  .MuiFilledInput-root.Mui-disabled {
    background-color: #e7e0e0;
    border-radius: 15px;
  }
  .Mui-focused {
    background-color: #fff !important;
  }
`;
