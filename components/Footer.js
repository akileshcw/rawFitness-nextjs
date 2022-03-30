import React from "react";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  return (
    <Flex background="black" color="white" flexDirection="column">
      <HStack mx="auto" spacing={500}>
        <VStack>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/features">
            <a>Features</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </VStack>
        <VStack>
          <Link href="/aboutUs">
            <a>About US</a>
          </Link>
          <Link href="/team">
            <a>The Team</a>
          </Link>
          <Link href="/ourMission">
            <a>Our Mission</a>
          </Link>
          <Link href="/ourVision">
            <a>Our Vision</a>
          </Link>
        </VStack>
        <VStack>
          <Link href="/enquiries">
            <a>Enquiries</a>
          </Link>
          <Link href="/contactUS">
            <a>Contact US</a>
          </Link>
        </VStack>
      </HStack>
      <Text mt={5} mx="auto" fontSize="xl">
        @Raw Fitness Studio 2022
      </Text>
    </Flex>
  );
}

export default Footer;
