import React from "react";
import { Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    { id: 0, name: "©Raw Fitness Studio 2022", src: "/" },
    { id: 1, name: "About US", src: "/aboutUs" },
    { id: 2, name: "Our Vision", src: "/ourVision" },

    { id: 3, name: "Contact US", src: "/contactUS" },
    { id: 4, name: "Terms", src: "/features" },
    { id: 5, name: "Privacy", src: "/services" },
  ];
  return (
    <Flex
      background="black"
      color="white"
      p={2}
      maxWidth="100%"
      flexDirection={["column", "column", "row"]}
    >
      {footerLinks.map((link) => (
        <Flex key={link.id} mx="auto">
          <Link href={link.src}>
            <a>{link.name}</a>
          </Link>
        </Flex>
      ))}
    </Flex>
  );
}

export default Footer;
