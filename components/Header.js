import React from "react";
import { useState } from "react";
import { Flex, Spacer, Button, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaBars, FaWindowClose } from "react-icons/fa";

const MotionFlex = motion(Flex);
const MotionButton = motion(Button); //

function Header() {
  const [IsOpen, setIsOpen] = useState();

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

  const [isSmallerThan760px] = useMediaQuery("(max-width:760px)");
  console.log(isSmallerThan760px);

  const handleHamburgerClick = () => setIsOpen(!IsOpen);

  return (
    <>
      <Flex
        px={[0, 0, 20]}
        height={[null, null, "10vh"]}
        flexDir={["column", "column", "row"]}
        align={[null, null, "center", "center", "center"]}
        _hover={{
          bgGradient: "linear(to-r, teal.500, green.500)",
        }}
      >
        <MotionFlex
          inital={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileTap={{ scale: 0.8 }}
          fontSize="2xl"
          fontWeight="bold"
          p={[5, 5, null]}
          align={["left", "left", "center"]}
          justifyContent={["space-between", "space-between", "center"]}
        >
          <Flex
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
            align="center"
          >
            <Link href="/">
              <a>Raw Fitness</a>
            </Link>
          </Flex>
          <Flex align="center" display={{ base: "block", md: "none" }}>
            {IsOpen ? (
              <FaWindowClose onClick={handleHamburgerClick} />
            ) : (
              <FaBars onClick={handleHamburgerClick} />
            )}
          </Flex>
        </MotionFlex>
        <Spacer />
        <Flex
          display={{
            base: IsOpen ? "flex" : "none",
            md: "flex",
          }}
          flexDir={{ base: "column", md: "row" }}
          align="center"
        >
          {tabGroup.map((tab) => (
            <MotionFlex
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              display={{
                base: IsOpen ? "flex" : "none",
                md: "flex",
              }}
              flexDir={{ base: "column", md: "row" }}
              key={tab.id}
              px={25}
              py={[1, 2, null]}
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
        {isSmallerThan760px && <Spacer />}
        <Flex align="center" justifyContent="center">
          <MotionButton
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            shadow="xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 1 }}
            display={{
              base: IsOpen ? "flex" : "none",
              md: "flex",
            }}
            flexDir={{ base: "column", md: "row" }}
            align="center"
          >
            <Link href="/">
              <a>Join us</a>
            </Link>
          </MotionButton>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
