import type { AppProps } from "next/app";

// Chakra UI ->
import { ChakraProvider } from "@chakra-ui/react";

// Custom Theme ->
import theme from "src/theme";
import "@/styles/globals.css";

// Components ->
import Layout from "@/components/layout";
import AnimatePage from "@/animations/animatePage";

// nProgress effect ->
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#144E7E"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <ChakraProvider theme={theme}>
        <Layout>
          <AnimatePage key={router.route}>
            <Component {...pageProps} />
          </AnimatePage>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
