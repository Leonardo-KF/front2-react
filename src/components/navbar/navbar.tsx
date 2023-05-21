import { Link } from "react-router-dom";
import { ButtonChangeTheme } from "../../pages/style";
import { useThemeStore } from "../../store/themeStore";
import { NavbarDiv } from "./style";

export function Navbar() {
  const { changeTheme, theme } = useThemeStore();

  return (
    <NavbarDiv>
      <Link to={"/home"}>Home</Link>
      <ButtonChangeTheme
        isLightMode={theme === "light" ? true : false}
        onClick={changeTheme}
      >
        Change
      </ButtonChangeTheme>
    </NavbarDiv>
  );
}
