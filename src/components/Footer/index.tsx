"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import FooterTopSVG from "./FooterTopSVG";
import FooterBg from "./FooterBg";
import { LuArrowRight } from "react-icons/lu";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Flex
      py={32}
      position={"relative"}
      justify={"center"}
      align={"center"}
      direction={"column"}
      id="footer"
    >
      <FooterTopSVG />
      <FooterBg />
      <Flex mt={16} direction={"column"} align={"center"} px={2}>
        <Flex bg={"#ffffff50"} pr={4} rounded={"full"} mb={5}>
          {/* <Text color={StargateColors.white} fontSize={"xs"}>
            <Text
              as="span"
              fontWeight={600}
              bg={"#ffffff50"}
              px={2}
              rounded={"full"}
              mr={1}
            >
              Stargate
            </Text>{" "}
            The only AI tool you will ever need
          </Text> */}
        </Flex>
        <Heading
          fontSize={{
            base: 50,
            md: 96,
          }}
          textAlign={"center"}
          color="transparent"
          maxW={1100}
          fontWeight={700}
          style={{
            backgroundImage: "linear-gradient(315deg, #ffffff 60%, #000000)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Be a part of the Service Provider family
        </Heading>

        <Button
          rightIcon={<LuArrowRight />}
          as={motion.a}
          href={""}
          target="_b"
          whileHover={{ scale: 1.1 }}
          size={"lg"}
          mt={5}
          gap={2}
          cursor={"pointer"}
        >
          Contact us
        </Button>
      </Flex>

      <Flex mt={32}>
        <Text color={StargateColors.white}>
          {new Date().getFullYear()} - Servo | All rights reserved
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
