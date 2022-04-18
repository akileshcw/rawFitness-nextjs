import React from "react";

import { Flex, Center } from "@chakra-ui/react";

import Modal from "../../components/modal";

import bmi from "../../public/images/pngs/bmi.png";
import calories from "../../public/images/pngs/calories.png";
import diet from "../../public/images/pngs/diet.png";
import macros from "../../public/images/pngs/macros.png";
import cardioSection from "../../public/images/pics/cardio.JPG";

function LandingPageThirdSection() {
  return (
    <>
      <Flex
        bgGradient="linear(to-r, #1488CC 20.86%, #2B32B2 66.18%)"
        h="100vh"
        flexDirection="column"
        paddingTop={25}
        width="100%"
      >
        <Center fontSize="4xl" fontWeight="bold" color="white">
          Services for you
        </Center>
        <Flex flexDirection="row" justifyContent="space-around" paddingTop={10}>
          <Modal imageUrl={bmi} altTag="bmi icon" desc="Calculate your BMI" />
          <Modal
            imageUrl={macros}
            altTag="macros icon"
            desc="Find Your Macros"
          />
          <Modal
            imageUrl={calories}
            altTag="calorie icon"
            desc="Calorie Calculator"
          />
          <Modal imageUrl={diet} altTag="diet icon" desc="Diet Design" />
        </Flex>
        <Center fontSize="4xl" fontWeight="bold" py={5} color="white">
          Programs offered
        </Center>
        <Flex flexDirection="row" justifyContent="space-evenly">
          <Modal
            imageUrl={cardioSection}
            altTag="Raw Fitness Cardio Section"
            desc="Cardios"
            flexHeight="200px"
            flexWidth="200px"
            imgHeight="183"
            imgWidth="348"
            borderRadius="md"
            icon={false}
          />
          <Modal
            imageUrl={cardioSection}
            altTag="Raw Fitness Weight Training"
            desc="Weight Training"
            flexHeight="200px"
            flexWidth="200px"
            imgHeight="183"
            imgWidth="348"
            borderRadius="md"
            icon={false}
          />
          <Modal
            imageUrl={cardioSection}
            altTag="Raw Fitness High Intensity Interval Training (HIIT)"
            desc="HIIT"
            flexHeight="200px"
            flexWidth="200px"
            imgHeight="183"
            imgWidth="348"
            borderRadius="md"
            icon={false}
          />
        </Flex>
      </Flex>
      ;
    </>
  );
}

export default LandingPageThirdSection;
