import { useThemeStore } from "../../store/themeStore";
import { HomeDiv } from "./style";

export function Home() {
  const { theme } = useThemeStore();
  return (
    <HomeDiv pageTheme={theme}>
      <h1> Home Page </h1>;
    </HomeDiv>
  );
}
