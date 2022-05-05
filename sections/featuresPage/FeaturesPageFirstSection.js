import React from "react";

import {
  Stack,
  Flex,
  Text,
  Container,
  SimpleGrid,
  Heading,
  StackDivider,
  Icon,
  Image,
} from "@chakra-ui/react";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";

function FeatureOne({ text, icon, iconBg, desc = "GET FIT! STAY FIT!" }) {
  return (
    <>
      <Stack direction={"row"} align={"center"}>
        <Flex
          w={8}
          h={8}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={iconBg}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
      {desc}
    </>
  );
}

export default function FeaturesPageFirstSection() {
  return (
    <>
      <Container maxW={"7xl"} py={7}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={"uppercase"}
              color={"white"}
              fontWeight={600}
              fontSize={"lg"}
              bg={useColorModeValue("#ebb566", "blue.900")}
              p={2}
              alignSelf={"flex-start"}
              rounded={"md"}
            >
              Our Mission
            </Text>
            <Heading>
              Our idea is simple: <br />
              Get Fit! Stay Fit!{" "}
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              With a mission of making healthy lifestyle changes, we train
              everyone to be fit and to stay fit by eating balanced diet and an
              active lifestyle
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <FeatureOne
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Spacious Area"}
                desc={
                  "With more than 2000+ sq.ft. area, Raw Fitness is spacious giving room to train and warm up"
                }
              />
              <FeatureOne
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Well Trained Trainers"}
                desc={
                  "Raw Fitness cares about its members deeply. We have well trained trainers who can instruct you on whatever fitness style you need to achieve."
                }
              />
              <FeatureOne
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Form Correction"}
                desc={
                  "Raw Fitness is built on the idea to make everyone fit. We always try to correct our members form and workout if they do it in the other way."
                }
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
