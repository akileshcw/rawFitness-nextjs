import React from "react";

import Link from "next/link";

import { Flex, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Wave from "react-wavify";

import FirstSectionImage from "../../public/icons/landingPageFirstSection(6).svg";

const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

function LandingPageFirstSection() {
  return (
    <>
      <Flex
        h={[null, null, "80vh"]}
        flexDir={["column", "column", "row"]}
        width="100%"
        justifyContent={[null, null, "center"]}
        // bgGradient="linear(to-r, #1488CC 20.86%, #2B32B2 66.18%)"
      >
        <Flex
          flexDirection="column"
          pl={[null, null, 10]}
          mx={["auto", "auto", null]}
        >
          <MotionText
            fontSize={["2xl", "3xl", "4xl"]}
            mx={["auto", "auto", null]}
            width="300px"
            fontWeight="bold"
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome to
          </MotionText>
          <MotionText
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="bold"
            width="300px"
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Raw Fitness
          </MotionText>

          <MotionText
            fontSize={["m", "xl", "2xl"]}
            color="black"
            mx={["auto", "auto", null]}
            fontWeight="bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            width="100%"
            py={[2, 2, 10]}
          >
            Start your fitness journey
          </MotionText>
          <Flex py={[2, 2, 5]}>
            <MotionText
              fontSize={["m", "xl", "2xl"]}
              fontWeight="bold"
              color="black"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.5,
                duration: 1,
                type: "spring",
                stiffness: 90,
              }}
            >
              Right
            </MotionText>
            <MotionText
              bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
              bgClip="text"
              fontSize={["m", "xl", "2xl"]}
              marginLeft={2}
              fontWeight="bold"
              borderBottom="5px solid black"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.5,
                duration: 0.5,
                type: "spring",
                stiffness: 90,
              }}
            >
              HERE
            </MotionText>
          </Flex>
          <Flex>
            <MotionText
              fontSize={["m", "xl", "2xl"]}
              fontWeight="bold"
              color="black"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 2,
                duration: 0.5,
                type: "spring",
                stiffness: 90,
              }}
            >
              Right
            </MotionText>
            <MotionText
              bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
              bgClip="text"
              fontSize={["m", "xl", "2xl"]}
              marginLeft={2}
              fontWeight="bold"
              borderBottom="5px solid black"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                delay: 2,
                duration: 0.5,
                type: "spring",
                stiffness: 90,
              }}
            >
              NOW
            </MotionText>
          </Flex>
          <Flex py={[2, 2, 10]}>
            <MotionButton
              bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
              shadow="xl"
              marginTop={5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                delay: 2.5,
                duration: 0.5,
              }}
            >
              <Link href="/services">
                <a>Know More</a>
              </Link>
            </MotionButton>
          </Flex>
        </Flex>
        <MotionFlex
          align="center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          h={["50%", "50%", "100%"]}
          width={["75%", "75%", "100%"]}
          mx={["auto", "auto", null]}
        >
          <FirstSectionImage width="100%" height="100%" />
        </MotionFlex>
      </Flex>
      <Flex h={[null, null, "10vh"]} width="100%">
        <Wave
          fill="url(#gradient)"
          paused={false}
          option={{ height: 20, amplitude: 50, speed: 1.0, points: 10 }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="10%" stopColor="#d4af37" />
              <stop offset="90%" stopColor="#f00" />
            </linearGradient>
          </defs>
        </Wave>
      </Flex>
    </>
  );
}

export default LandingPageFirstSection;
