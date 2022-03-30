import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
// import Layout from "./../components/Layout";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const colors = {
  brand: {
    900: "#000000",
    800: "#000000",
    700: "#000000",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
