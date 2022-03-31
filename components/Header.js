import React from "react";
import { Flex, Box, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button); //

function Header() {
  const tabGroup = [
    {
      name: "Home",
      href: "/",
      id: 1,
    },
    {
      name: "Features",
      href: "/features",
      id: 2,
    },
    {
      name: "Services",
      href: "/services",
      id: 3,
    },
    {
      name: "Blog",
      href: "/blog",
      id: 4,
    },
  ];

  return (
    <>
      <Flex
        px={20}
        height="10vh"
        align="center"
        bgGradient="linear(to-r, #1488CC 20.86%, #2B32B2 66.18%)"
        _hover={{
          bgGradient: "linear(to-r, teal.500, green.500)",
        }}
      >
        <MotionBox
          animate={{ display: "block" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          fontSize="2xl"
          fontWeight="bold"
          bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
          bgClip="text"
        >
          <Link href="/">
            <a>Raw Fitness</a>
          </Link>
        </MotionBox>
        <Spacer />
        <Flex>
          {tabGroup.map((tab) => (
            <MotionFlex
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              key={tab.id}
              px={19.5}
              align="center"
              fontSize="xl"
              _hover={{
                bgGradient: "linear(to-br, #FF8008 23.61%, #FFC837 99.36%)",
                borderRadius: "25px",
                py: "5px",
              }}
            >
              <Link href={tab.href}>
                <a>{tab.name}</a>
              </Link>
            </MotionFlex>
          ))}
        </Flex>
        <Spacer />
        <MotionButton
          bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
          shadow="xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link href="/">
            <a>Join us</a>
          </Link>
        </MotionButton>
      </Flex>
    </>
  );
}

export default Header;
