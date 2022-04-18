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

import checkedIcon from "../../public/images/pngs/Icon-CheckedTick.png";
import crossIcon from "../../public/images/pngs/Icon-CheckedCrossTick.png";

function LandingPageSecondSection() {
  return (
    <>
      <Flex
        bgGradient="linear(to-r,  #A8FF78 0%, #78FFD6 100%)"
        h={[null, null, "85vh"]}
        flexDirection={["column", "column", "row"]}
        paddingTop={5}
      >
        <Flex align="center" mx="auto">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            playing={true}
            muted={true}
            controls={true}
            loop={true}
          />
        </Flex>
        <Flex flexDirection="column" ml="auto">
          <Text fontSize="4xl" fontWeight="bold" color="black">
            We believe in
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
          >
            NATURAL TRANSFORMATION
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="italics"
            color="black"
            paddingTop={15}
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
          >
            It is a lifestyle
          </Text>
          <Grid templateRows="repeat(2,1fr)" templateColumns="repeat(2,1fr)">
            <GridItem paddingBottom={3}>
              <IconTextPlaceHolder
                imageUrl={checkedIcon}
                altTag="Blue Tick checked icon"
                description="Less Supplementation"
              />
            </GridItem>
            <GridItem paddingBottom={3}>
              <IconTextPlaceHolder
                imageUrl={checkedIcon}
                altTag="Blue Tick checked icon"
                description="Diet Based Transformation"
              />
            </GridItem>
            <GridItem>
              <IconTextPlaceHolder
                imageUrl={crossIcon}
                altTag="Blue Tick checked icon"
                description="No anaboilcs"
              />
            </GridItem>
            <GridItem>
              <IconTextPlaceHolder
                imageUrl={crossIcon}
                altTag="Blue Tick checked icon"
                description="No fat burners"
              />
            </GridItem>
          </Grid>

          <Container fontSize="xl" ml={-4}>
            We constantly thrive to make lifestyle changes through diet and
            physical activity recommendations to make your fitness a lifestyle.
            It is all about nutrition and physical activity that your fitness
            depends on!
          </Container>
          <Flex>
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
        height="15vh"
        justifyContent="space-around"
        flexDirection="row"
      >
        <Flex flexDirection="column">
          <Center fontSize="4xl" fontWeight="bold">
            300+
          </Center>
          <Center fontSize="2xl" fontWeight="medium">
            Happy Clients
          </Center>
        </Flex>
        <Flex flexDirection="column">
          <Center fontSize="4xl" fontWeight="bold">
            2000+
          </Center>
          <Center fontSize="2xl" fontWeight="semibold">
            Sq.ft area
          </Center>
        </Flex>

        <Flex flexDirection="column">
          <Center fontSize="4xl" fontWeight="bold">
            700+
          </Center>
          <Center fontSize="2xl" fontWeight="semibold">
            Workouts & Stretches
          </Center>
        </Flex>
      </Flex>
    </>
  );
}

export default LandingPageSecondSection;
