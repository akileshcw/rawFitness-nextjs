import React from "react";
import { Flex, Center } from "@chakra-ui/react";
import { FaAngleDoubleRight } from "react-icons/fa";

import Image from "next/image";

function Modal({
  imageUrl,
  altTag,
  desc,
  flexWidth = "200px",
  flexHeight = "200px",
  imgHeight = "75px",
  imgWidth = "75px",
  borderRadius = "2xl",
  icon = true,
}) {
  return (
    <Flex
      width={flexWidth}
      height={flexHeight}
      bg="white"
      flexDirection="column"
      borderRadius={borderRadius}
      shadow="2xl"
    >
      <Center py={5}>
        <Image
          src={imageUrl}
          alt={altTag}
          height={imgHeight}
          width={imgWidth}
        />
      </Center>
      <Center fontSize="xl" fontWeight="semibold">
        {desc}
      </Center>
      <Center paddingTop={2}>{icon ? <FaAngleDoubleRight /> : null}</Center>
    </Flex>
  );
}

export default Modal;
