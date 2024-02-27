import React from 'react';
import { Box, Image, Heading, Text, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      color="black"
      boxShadow="md"
    >
      <Image src={imageSrc} alt={title} borderRadius="lg" />
      <Box p="6">
        <Heading as="h4" size="md" mb="2">
          {title}
        </Heading>
        <Text color="gray.600" mb="4">
          {description}
        </Text>
        <Link color="black" href="#" textDecoration="underline">
          <b>See more </b><FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
