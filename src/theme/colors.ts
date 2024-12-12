const lightColors = {
    primary: "#6200ee",
    background: "#ffffff",
    activeTabColor: "#007AFF",
    notActiveTab: "#5A6672",
    text: "#000000",
    footerBackground: "#f5f5f5",
  };
  
  const darkColors = {
    primary: "#bb86fc",
    background: "#121212",
    activeTabColor: "#007AFF",
    notActiveTab: "#5A6672",
    text: "#ffffff",
    footerBackground: "#1e1e1e",
  };
  
  export const theme = {
    light: lightColors,
    dark: darkColors,
  };
  
  export type ThemeType = typeof theme.light | typeof theme.dark;