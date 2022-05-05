import React from "react";
import { Stack, Text } from "@chakra-ui/react";

import { FcApproval, FcCancel } from "react-icons/fc";

function IconTextPlaceHolder({ isTick, description }) {
  return (
    <Stack direction="horizontal" paddingRight={10}>
      {isTick ? <FcApproval size={30} /> : <FcCancel size={25} />}
      <Text paddingLeft={2} fontSize="xl">
        {description}
      </Text>
    </Stack>
  );
}

export default IconTextPlaceHolder;
