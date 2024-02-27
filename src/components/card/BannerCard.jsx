import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const BannerCard = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundImage={`url(${imageSrc})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      color="white"
      textAlign="center"
      p="6"
      borderRadius="md" // You can adjust the value as needed, "md" represents a medium rounded value
    >
      <Heading as="h4">
        {title}
      </Heading>
      <Text color="white"> 
        {description}
      </Text>
    </Box>
  );
};



export default BannerCard;
