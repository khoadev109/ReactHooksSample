import React, { useContext } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#000000",
    background: "#938585"
  }
};

export const ThemeContext = React.createContext(themes.light);

const UseContextSample = function () {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    </div>

  );
}

export default UseContextSample;
