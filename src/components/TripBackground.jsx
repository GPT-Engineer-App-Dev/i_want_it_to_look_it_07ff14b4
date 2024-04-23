import React from 'react';
import { Box } from '@chakra-ui/react';

const TripBackground = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      zIndex={-1}
      backgroundImage="url('https://example.com/trippy-background.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      opacity={0.6}
      filter="hue-rotate(180deg)"
    />
  );
};

export default TripBackground;