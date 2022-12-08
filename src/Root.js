import { useState } from "react";
import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import Header from "./Component/Header";
import { CoinProvider } from "./Component/store/coin-context";
import { darkMode, lightMode } from "./theme";

function Root() {
  const [mode, setMode] = useState(true);
  const theme = mode ? lightMode : darkMode;
  const changeMode = () => {
    setMode((prev) => !prev);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CoinProvider mode={mode}>
          <Header mode={mode} changeMode={changeMode} />
          <Outlet />
        </CoinProvider>
      </ThemeProvider>
    </>
  );
}

export default Root;
