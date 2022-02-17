import React from "react";
import { Flex, Box, Circle } from "@chakra-ui/react";
import Image from "next/image";

function PhotoCircle({
  cirSize = "400px",
  cirBg = "#789CE2",
  cirPos = "absolute",
  cirL = "800px",
  cirT = "100px",
  imgSrc,
  imgAlt,
  imgHeight = "350px",
  imgWidth = "350px",
}) {
  return (
    <Flex>
      <Circle
        size={cirSize}
        bg={cirBg}
        position={cirPos}
        left={cirL}
        top={cirT}
        shadow="2xl"
      >
        <Image src={imgSrc} alt={imgAlt} height={imgHeight} width={imgWidth} />
      </Circle>
    </Flex>
  );
}

export default PhotoCircle;
