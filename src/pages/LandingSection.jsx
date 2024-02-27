import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "../layout/FullScreenSection";
import Logo from '../assets/logo/Asset_9@4x.png';

const greeting = "Little Lemon";
const bio2 = "We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    padding={8}
  >
    <VStack spacing={16} alignItems="center">
      <VStack spacing={4} alignItems="center" padding={4} > 
        <Avatar src={Logo} size="xl" /> 
        <Heading>{greeting}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);


export default LandingSection;
