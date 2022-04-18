import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

function IconTextPlaceHolder({ imageUrl, altTag, description }) {
  return (
    <Stack direction="horizontal" paddingRight={10}>
      <Image src={imageUrl} alt={altTag} height="10px" width="25px" />
      <Text paddingLeft={2} fontSize="xl">
        {description}
      </Text>
    </Stack>
  );
}

export default IconTextPlaceHolder;
