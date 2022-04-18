import React from "react";

import { Flex, Center, Grid, Heading, Avatar, Text } from "@chakra-ui/react";

import akilImage from "../../public/images/pngs/IMG_0225.png";

function LandingPageFourthSection() {
  const reviewGroup = [
    // Get the data from Google Business API and populate it as array of objects
    {
      reviewID: 1,
      name: "Varsha",
      review: "Very good atmosphere",
      stars: 5,
    },
    {
      reviewID: 2,
      name: "Pavithra",
      review: "Goood trainer",
      stars: 5,
    },
    {
      reviewID: 3,
      name: "Vishnu",
      review: "Good enviornment",
      stars: 5,
    },
    {
      reviewID: 4,
      name: "Maniyan",
      review: "Nice training",
      stars: 4,
    },
  ];

  return (
    <>
      <Flex
        bgGradient="linear(to-r,  #A8FF78 0%, #78FFD6 100%)"
        h="100vh"
        flexDirection="column"
        paddingTop={5}
      >
        <Center
          fontSize="4xl"
          fontWeight="bold"
          color="black"
          py={3}
          _hover={{
            bgGradient: "linear(to-br, #FF8008 23.61%, #FFC837 99.36%)",
            bgClip: "text",
          }}
        >
          Member&apos;s Feedback
        </Center>
        <Grid templateColumns="repeat(3,1fr)" gap={2}>
          {reviewGroup.map((review) => (
            <Flex
              ml={10}
              bg="white"
              h="250px"
              w="250px"
              flexDirection="column"
              alignItems="center"
              shadow="2xl"
              key={review.reviewID}
            >
              <Center py={5}>
                <Avatar name={review.name} src={akilImage}></Avatar>
              </Center>
              <Heading py={2}>{review.name}</Heading>
              <Text>{review.review}</Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default LandingPageFourthSection;
