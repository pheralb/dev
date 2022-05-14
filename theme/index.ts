import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    bg: {
      light: "#FCFCFC",
      dark: "#181819",
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
        backgroundColor: mode("bg.light", "bg.dark")(props),
      },
    }),
  },
});

export default theme;
