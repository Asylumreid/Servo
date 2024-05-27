"use client";
import { StargateColors } from "#/src/utils/Colors";
import { Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import {
  LuBot,
  LuCreditCard,
  LuGauge,
  LuLanguages,
  LuLayoutTemplate,
  LuLifeBuoy,
} from "react-icons/lu";

const Features = () => {
  return (
    <Flex
      id="features"
      direction={"column"}
      justify={"center"}
      align={"center"}
      my={24}
      px={2}
      maxW={1200}
      mx={"auto"}
    >
      <Heading
        fontSize={{
          base: 32,
          md: 48,
        }}
        textAlign={"center"}
      >
        Why choose Servo?
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
        my={10}
      >
        {Cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title}>
            {card.text}
          </Card>
        ))}
      </Grid>
    </Flex>
  );
};

interface CardProps {
  icon: IconType;
  title: string;
  children: ReactNode;
}

const Card = ({ icon, title, children }: CardProps) => (
  <Flex maxW={350} role="group">
    <Icon
      as={icon}
      fontSize={48}
      mr={5}
      p={2}
      bg={StargateColors.lightGrey}
      rounded={"md"}
      strokeWidth={1.5}
      transition={"all 0.25s ease"}
      _groupHover={{
        bg: StargateColors.black,
        color: StargateColors.white,
        shadow: "dark-lg",
        transform: "scale(1.1)",
      }}
    />
    <Flex direction={"column"} gap={1}>
      <Heading fontSize={"xl"}>{title}</Heading>
      <Text fontSize={"small"} color={StargateColors.grey}>
        {children}
      </Text>
    </Flex>
  </Flex>
);

const Cards = [
  {
    icon: LuBot,
    title: "Seamless Service Booking",
    text: "Effortlessly book a wide range of home services with just a few taps.",
  },
  {
    icon: LuGauge,
    title: "Wide Service Provider Network",
    text: "Access a diverse network of skilled freelancers and companies ready to fulfil your service requests.",
  },
  {
    icon: LuCreditCard,
    title: "Secure Payment Options",
    text: "Enjoy peace of mind with secure and convenient payment methods integrated into the app, ensuring hassle-free transactions.",
  },
  {
    icon: LuLanguages,
    title: "Real-Time Communication",
    text: "Stay connected with service providers and track the progress of your requests in real-time, ensuring transparency and efficient coordination.",
  },
  {
    icon: LuLayoutTemplate,
    title: "Ratings and Reviews",
    text: "Make informed decisions by checking ratings and reviews from other customers. This will help you choose the best service providers for your needs.",
  },
  {
    icon: LuLifeBuoy,
    title: "Personalised Recommendations",
    text: "Receive tailored recommendations based on your preferences and past bookings, enhancing your overall experience on the platform.",
  },
  {
    icon: LuLifeBuoy,
    title: "Easy Scheduling",
    text: "Flexible scheduling options allow you to book services at your convenience, whether it's a one-time appointment or a recurring visit.",
  },
  {
    icon: LuLifeBuoy,
    title: "Customer Support",
    text: "Get prompt assistance from our dedicated customer support team, ready to address any inquiries or concerns you may have.",
  },
];

export default Features;