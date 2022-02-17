import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";

function Features(props) {
  return (
    <>
      <Head>
        <title>Raw Fitness - Features</title>
      </Head>
      <Box
        bgGradient="linear(to-r, #1488CC 20.86%, #2B32B2 66.18%)"
        height="100vh"
        alignContent="center"
        justifyItems="center"
        textAlign="center"
        color="white"
      >
        <Text
          fontSize="6xl"
          _hover={{
            bgGradient: "linear(to-br, #FF8008 23.61%, #FFC837 99.36%)",
            bgClip: "text",
            cursor: "pointer",
          }}
        >
          Features page
        </Text>
        <Box py={200}>
          <Button
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            boxShadow="2xl"
          >
            <Link href="/">
              <a>Back to Home</a>
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Features;
