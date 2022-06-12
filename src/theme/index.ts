import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#FCFCFC",
      dark: "#121212",
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
    heading: "Inter-Semibold, sans-serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: (props: ChakraProps) => ({
      "html, body": {
        height: "100%",
        maxHeight: "100vh",
        background: mode("bg.light", "bg.dark")(props),
        backgroundSize: "30px 30px",
        fontSize: "15px",
      },
    }),
  },
});

export default theme;
