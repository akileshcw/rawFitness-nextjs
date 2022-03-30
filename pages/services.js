import React from "react";
import { Box, Text, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { baseUrl, fetchApi } from "../utils/fetchApi";

function Services({ workoutDelts }) {
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
          Services page
        </Text>
        <Box py={200}>
          <Flex flexWrap="wrap" flexDirection="row">
            {/* --------Fetch the properties from ExerciseDB from RapidAPI and map it over here---------- */}
            {workoutDelts.map((workout) => (
              <Flex width="100px" height="100px" shadow="xl" key={workout.id}>
                <Image
                  src={workout.gifUrl}
                  height="200px"
                  width="200px"
                  alt="shoulder workout"
                />
                <Text>{workout.name.toUpperCase()}</Text>
              </Flex>
            ))}
          </Flex>
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

export default Services;

export async function getStaticProps() {
  const workoutsDelts = await fetchApi(
    `https://${baseUrl}/exercises/target/abs`
  );
  // const workoutDeltsArray = new Array(workoutDelts);
  return {
    props: {
      workoutDelts: workoutsDelts,
    },
  };
}