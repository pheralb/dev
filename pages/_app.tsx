import type { AppProps } from "next/app";

// Chakra UI ->
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";

// Custom Theme ->
import "styles/globals.css";

// Components ->
import Layout from "components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
