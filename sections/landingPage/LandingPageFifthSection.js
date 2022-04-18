import React from "react";

import {
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Text,
  Button,
} from "@chakra-ui/react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Map, { Marker, Popup, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function LandingPageFifthSection() {
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
      <Flex
        height="100vh"
        bgGradient="linear(to-r, #A8FF78 0%, #78FFD6 100%)"
        justifyContent="space-around"
      >
        <Flex flexDirection="column" align="center">
          <Heading mb={5}>Locate us</Heading>
          <Map
            initialViewState={{
              longitude: 77.035765,
              latitude: 11.036454,
              zoom: 14,
            }}
            style={{ width: 500, height: 500 }}
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            mapboxAccessToken={MAPBOX_TOKEN}
            pitch={60}
            minZoom={13}
            maxZoom={20}
          >
            <Marker longitude={77.035765} latitude={11.036454} color="red" />
            <Popup
              longitude={77.035765}
              latitude={11.036454}
              offset={{
                "bottom-left": [12, -38],
                bottom: [0, -38],
                "bottom-right": [-12, -38],
              }}
            >
              <Text fontSize="xl">Raw Fitness Studio</Text>
            </Popup>
            <GeolocateControl />
          </Map>
        </Flex>
        <VStack spacing={5}>
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
        </VStack>
      </Flex>
    </>
  );
}

export default LandingPageFifthSection;
