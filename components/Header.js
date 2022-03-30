import React from "react";
import { Flex, Box, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";

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
        <Box
          fontSize="2xl"
          fontWeight="bold"
          bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
          bgClip="text"
        >
          <Link href="/">
            <a>Raw Fitness</a>
          </Link>
        </Box>
        <Spacer />
        <Flex>
          {tabGroup.map((tab) => (
            <Flex
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
            </Flex>
          ))}
        </Flex>
        <Spacer />
        <Button
          bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
          shadow="xl"
        >
          <Link href="/">
            <a>Join us</a>
          </Link>
        </Button>
      </Flex>
    </>
  );
}

export default Header;
