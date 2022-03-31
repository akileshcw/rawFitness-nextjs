import React from "react";
import { Flex, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

function Footer() {
  const footerLinks = [
    { id: 0, name: "©Raw Fitness Studio 2022", src: "/" },
    { id: 1, name: "About US", src: "/aboutUs" },
    { id: 2, name: "Our Vision", src: "/ourVision" },
    { id: 3, name: "Blog", src: "/blog" },
    { id: 4, name: "Enquiries", src: "/enquiries" },
    { id: 5, name: "Contact US", src: "/contactUS" },
    { id: 6, name: "Terms and Conditions", src: "/features" },
    { id: 7, name: "Privacy", src: "/services" },
  ];
  return (
    <Flex background="black" color="white" p={2}>
      <HStack spacing={20} mx="auto">
        {footerLinks.map((link) => (
          <Link key={link.id} href={link.src}>
            <a>{link.name}</a>
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}

export default Footer;
