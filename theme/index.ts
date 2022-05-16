import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#FCFCFC",
      dark: "#181819",
    },
    border: {
      light: "#E6E6E6",
      dark: "#252526",
    },
    brand: {
      color: "#401b34",
    },
  },
  fonts: {
    body: "Inter-Regular, sans-serif",
    heading: "Inter-Medium, sans-serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        background: mode("radial-gradient(#EEEEEE 1px, #FCFCFC 1px)", "radial-gradient(#202020 1px, #181819 1px)")(props),
        backgroundSize: "30px 30px",
        fontSize: "15px",
      },
    }),
  },
});

export default theme;
