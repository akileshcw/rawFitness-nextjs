import React from "react";
import { Stack, Text } from "@chakra-ui/react";

import CheckedIcon from "../public/icons/Icon-CheckedTick.svg";
import CrossIcon from "../public/icons/Icon-CheckedCrossTick.svg";

function IconTextPlaceHolder({ isTick, description }) {
  return (
    <Stack direction="horizontal" paddingRight={10}>
      {isTick ? (
        <CheckedIcon width="25px" height="25px" />
      ) : (
        <CrossIcon width="25px" height="25px" />
      )}
      <Text paddingLeft={2} fontSize="xl">
        {description}
      </Text>
    </Stack>
  );
}

export default IconTextPlaceHolder;
