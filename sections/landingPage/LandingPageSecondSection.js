import React from "react";
import Link from "next/link";

import {
  Flex,
  Text,
  Center,
  Grid,
  GridItem,
  Container,
  Button,
} from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";

import IconTextPlaceHolder from "../../components/iconTextPlaceholder";



function LandingPageSecondSection() {
  return (
    <>
      <Flex
        bgGradient="linear(to-r,  #A8FF78 0%, #78FFD6 100%)"
        h={[null, null, "85vh"]}
        flexDirection={["column", "column", "row"]}
        px={5}
      >
        <Flex
          align="center"
          flexDir="row"
          justifyContent="center"
          width={["100%", "100%", "80%"]}
          mx={["auto", "auto", null]}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            playing={false}
            muted={true}
            controls={true}
            loop={true}
            width={"100%"}
            height={"100%"}
          />
        </Flex>
        <Flex flexDirection="column" align="flex-start">
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="black"
            mx={["auto", "auto", null, null, null]}
          >
            We believe in
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
            align="center"
            mx={["auto", "auto", null, null, null]}
          >
            NATURAL TRANSFORMATION
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="italics"
            color="black"
            paddingTop={15}
            mx={["auto", "auto", null]}
          >
            Fitness is not a goal
          </Text>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="widest"
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
            paddingBottom={5}
            mx={["auto", "auto", null]}
          >
            It is a lifestyle
          </Text>
          <Grid
            templateRows="repeat(2,1fr)"
            templateColumns="repeat(2,1fr)"
            px={[5, 5, null]}
          >
            <GridItem paddingBottom={3}>
              <IconTextPlaceHolder
                isTick={true}
                description="Less Supplementation"
              />
            </GridItem>
            <GridItem paddingBottom={3}>
              <IconTextPlaceHolder
                isTick={true}
                description="Diet Based Transformation"
              />
            </GridItem>
            <GridItem>
              <IconTextPlaceHolder description="No anaboilcs" />
            </GridItem>
            <GridItem>
              <IconTextPlaceHolder description="No fat burners" />
            </GridItem>
          </Grid>

          <Container
            fontSize="xl"
            ml={-4}
            mx={["auto", "auto", null, null, null]}
            px={[5, 5, null]}
          >
            We constantly thrive to make lifestyle changes through diet and
            physical activity recommendations to make your fitness a lifestyle.
            It is all about nutrition and physical activity that your fitness
            depends on!
          </Container>
          <Flex mx={["auto", "auto", null]} py={[2, 2, 5]}>
            <Button
              bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
              shadow="xl"
              marginTop={5}
              ml={-1}
            >
              <Link href="/services">
                <a>Know More</a>
              </Link>
            </Button>
          </Flex>
        </Flex>
      </Flex>

      {/* -----------------PAGE CONTENT 2 THE BOTTOM RIBBON---------------------- */}
      <Flex
        bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
        height={[null, null, "15vh"]}
        justifyContent="space-around"
        flexDirection={["column", "column", "row"]}
        align="center"
      >
        <Flex flexDirection="column" py={[2, 2, 5]}>
          <Center fontSize="4xl" fontWeight="bold">
            500+
          </Center>
          <Center fontSize="2xl" fontWeight="medium">
            Happy Clients
          </Center>
        </Flex>
        <Flex flexDirection="column" py={[2, 2, 5]}>
          <Center fontSize="4xl" fontWeight="bold">
            2000+
          </Center>
          <Center fontSize="2xl" fontWeight="medium">
            Sq.ft area
          </Center>
        </Flex>

        <Flex flexDirection="column" py={[2, 2, 5]}>
          <Center fontSize="4xl" fontWeight="bold">
            700+
          </Center>
          <Center fontSize="2xl" fontWeight="medium">
            Workouts & Stretches
          </Center>
        </Flex>
      </Flex>
    </>
  );
}

export default LandingPageSecondSection;
