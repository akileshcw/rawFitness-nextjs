import React from "react";
import {
  Box,
  Text,
  Button,
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  VStack,
  List,
  ListItem,
  ListIcon,
  HStack,
} from "@chakra-ui/react";

import Head from "next/head";

import FeaturesPageFirstSection from "../sections/featuresPage/FeaturesPageFirstSection";
import FeaturesPageSecondSection from "../sections/featuresPage/FeaturesPageSecondSection";
import FeaturesPageThirdSection from "../sections/featuresPage/FeaturesPageThirdSection";

export default function Features() {
  return (
    <>
      <Head>
        <title>Raw Fitness - Features</title>
      </Head>
      {/* ----------------------PAGE CONTENT 1 STARTS---------------------------- */}
      <FeaturesPageFirstSection />
      {/* ----------------------PAGE CONTENT 1 ENDS---------------------------- */}
      {/* ----------------------PAGE CONTENT 2 STARTS---------------------------- */}
      <FeaturesPageSecondSection />
      {/* ----------------------PAGE CONTENT 2 ENDS---------------------------- */}
      {/* ----------------------PAGE CONTENT 3 STARTS---------------------------- */}
      {/* ----------------------PRICE DETAILS---------------------------- */}
      <FeaturesPageThirdSection />
      {/* ----------------------PAGE CONTENT 3 ENDS---------------------------- */}
    </>
  );
}


