import styled from "styled-components";

export interface HomeDivProps {
  pageTheme: string;
}

export const HomeDiv = styled.div<HomeDivProps>`
  display: flex;
  background-color: ${(props) =>
    props.pageTheme === "light" ? "#fff" : "#000"};
  color: ${(props) => (props.pageTheme === "light" ? "#000" : "#fff")};
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
