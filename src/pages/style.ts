import { styled } from "styled-components";

export interface BoxTheme {
  textColor: string;
  isLightMode: boolean;
}

export const Box = styled.div<BoxTheme>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isLightMode ? "#fff" : "#000")};
  color: ${(props) => (props.isLightMode ? "#000" : "#fff")};
  h2 {
    color: ${(props) => props.textColor};
  }
  button {
    margin-top: 20px;
  }
`;

export type ButtonThemeColor = Omit<BoxTheme, "textColor">;

export const ButtonChangeTheme = styled.button<ButtonThemeColor>`
  display: flex;
  width: 80px;
  height: 40px;
  margin: 12px;
  border-radius: 8px;
  border: none;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background-color: ${(props) => (props.isLightMode ? "#000" : "#fff")};
  color: ${(props) => (props.isLightMode ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: aquamarine;
  }
`;
