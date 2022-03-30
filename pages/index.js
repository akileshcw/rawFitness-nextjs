import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

import {
  Flex,
  Box,
  Spacer,
  Text,
  Button,
  useMediaQuery,
  Grid,
  GridItem,
  Container,
  Center,
  Avatar,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import IconTextPlaceHolder from "../components/iconTextPlaceholder";
import Modal from "../components/modal";
import PhotoCircle from "../components/photoCircle";

import checkedIcon from "../public/icons/Icon-CheckedTick.svg";
import crossIcon from "../public/icons/Icon-CheckedCrossTick.svg";
import bmi from "../public/images/pngs/bmi.png";
import calories from "../public/images/pngs/calories.png";
import diet from "../public/images/pngs/diet.png";
import macros from "../public/images/pngs/macros.png";
import cardioSection from "../public/images/pics/cardio.JPG";
import akilImage from "../public/images/pngs/IMG_0225.png";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() {
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

  const isNotSmallScreen = useMediaQuery("(min-width:600px)"); // Min midth 600 px sets the breakpoint for desktop screens.
  
  const initialValues = {
    name: "",
    phoneNumber: "",
    message: "",
  };
  const onSubmit = (values) => {
    // ---------use the api to store the enquiry data into a excel data to contact the lead--------
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required!"),
    phoneNumber: Yup.string().required("Please enter your phone number"),
    message: Yup.string().required("Tell us your message"),
  });

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoicmF3Zml0bmVzc3N0dWRpbzIwMjAiLCJhIjoiY2wxYnNvMTFtMDAzNjNrdGZ2dGljdnh3ZSJ9.yyXufjglgxutglnXClp49Q";
  // not a safe way to display the token here. Should take this file to the environment variable section. Edit later
  // console.log("The form values are", formik.values);

  return (
    <>
      <Head>
        <title>Raw Fitness - Get Fit Stay Fit</title>
      </Head>
      {/* ----------------------Navbar---------------------------- */}

      {/* ----------------------NAVBAR ENDS---------------------------- */}
      {/* ----------------------PAGE CONTENT 1 STARTS---------------------------- */}
      <Flex
        bgGradient="linear(to-r, #1488CC 20.86%, #2B32B2 66.18%)"
        h="90vh"
        flexDirection="column"
        paddingTop={50}
        width="100%"
      >
        <Flex paddingTop={0} paddingLeft={200} width={500}>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
          >
            Welcome to Raw Fitness
          </Text>
        </Flex>
        <Flex paddingTop={35} paddingLeft={200} letterSpacing={3}>
          <Text fontSize="3xl" color="white">
            Start your fitness journey
          </Text>
        </Flex>
        <Flex paddingTop={5} paddingLeft={200} letterSpacing={3}>
          <Text fontSize="3xl" color="white">
            Right
          </Text>
          <Text
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
            fontSize="3xl"
            marginLeft={2}
            fontWeight="bold"
            borderBottom="5px solid white"
          >
            HERE
          </Text>
        </Flex>
        <Flex paddingTop={5} paddingLeft={200} letterSpacing={3}>
          <Text fontSize="3xl" color="white">
            Right
          </Text>
          <Text
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            bgClip="text"
            fontSize="3xl"
            marginLeft={2}
            fontWeight="bold"
            borderBottom="5px solid white"
          >
            NOW
          </Text>
        </Flex>
        <Flex>
          <Button
            bgGradient="linear(to-br, #FF8008 23.61%, #FFC837 99.36%)"
            shadow="xl"
            marginLeft={200}
            marginTop={5}
          >
            <Link href="/services">
              <a>Know More</a>
            </Link>
          </Button>
        </Flex>
      </Flex>
      <Flex alignItems="flex-end">
        <PhotoCircle
          cirPos="absolute"
          imgSrc={akilImage}
          imgAlt="Raw Fitness Members photo"
        ></PhotoCircle>
      </Flex>
      {/* ----------------------PAGE CONTENT 1 ENDS---------------------------- */}
      {/* ----------------------PAGE CONTENT 2 STARTS---------------------------- */}
      <Flex
        bgGradient="linear(to-r,  #A8FF78 0%, #78FFD6 100%)"
        h="85vh"
        flexDirection="row"
        paddingTop={5}
      >
        <Flex>
          <PhotoCircle
            cirPos="relative"
            cirL="100px"
            cirT="20px"
            imgSrc={akilImage}
            imgAlt="Raw Fitness Members photo"
          ></PhotoCircle>
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
      {/* -------------------------PAGE CONTENT 2 ENDS---------------------------- */}
      {/* ----------------------PAGE CONTENT 3 STARTS---------------------------- */}
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
      {/* ----------------------PAGE CONTENT 3 ENDS---------------------------- */}
      {/* -----------------------PAGE CONTENT 4 STARTS --------------------------*/}
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
      {/* -----------------------PAGE CONTENT 4 ENDS --------------------------*/}
      {/* -----------------------PAGE CONTENT 5 ENDS --------------------------*/}
      <Flex height="100vh" bgGradient="linear(to-r, #A8FF78 0%, #78FFD6 100%)">
        <Flex flexDirection="horizontal" justifyContent="space-around">
          <Flex
            flexDirection="column"
            ml={10}
            align="center"
            justifyContent="center"
          >
            <Heading mb={5}>Locate us</Heading>
            <Map
              initialViewState={{
                longitude: 77.0354303678264,
                latitude: 11.036765069843321,
                zoom: 14,
              }}
              style={{ width: 500, height: 500 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={MAPBOX_TOKEN}
            >
              <Marker
                longitude={77.0354303678264}
                latitude={11.036765069843321}
                color="red"
              />
            </Map>
          </Flex>
          <Flex flexDirection="column">
            <Heading>Contact US</Heading>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    type="text"
                    id="name"
                    placeholder="Your name"
                    name="name"
                  />
                  {/* formik.touched is an object from formik to check if the field is visited or not. It is turned on by formik.handleBlur */}
                  <ErrorMessage name="name" />

                  <FormLabel htmlFor="name">Phone Number</FormLabel>
                  <Field
                    id="phoneNumber"
                    type="number"
                    placeholder="Your Phone Number"
                    name="phoneNumber"
                  />
                  {/* ------Form validation to check if there is no empty phone number sent to us-------- */}
                  {/* formik.touched is an object from formik to check if the field is visited or not. It is turned on by formik.handleBlur */}
                  <ErrorMessage name="phoneNumber" />

                  <FormLabel htmlFor="message">Your Message</FormLabel>
                  <Field
                    type="text"
                    id="message"
                    placeholder="Your message to us"
                    name="message"
                  />
                  {/* ----------Form validation to check if there is no empty message to us--------- */}
                  <ErrorMessage name="message" />

                  <Button type="submit">Submit</Button>
                </FormControl>
              </Form>
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
