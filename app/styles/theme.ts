import { ChakraProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Import custom components ->
import components from "./components";

const theme = extendTheme(
  {
    components,
  },
  {
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
    colors: {
      bg: {
        light: "#F2F2F2",
        dark: "#1F2028",
      },
      full: {
        light: "#ffffff",
        dark: "#000000",
      },
      brand: {
        purple: "#4343E5",
      },
    },
    fonts: {
      heading: "'Inter-Regular', sans-serif;",
      body: "'Inter-Regular', sans-serif;",
    },
    styles: {
      global: (props: ChakraProps) => ({
        "html, body": {
          height: "100%",
          maxHeight: "100vh",
          bg: mode("bg.light", "bg.dark")(props),
          fontSize: "16px",
        },
      }),
    },
  }
);

export default theme;
