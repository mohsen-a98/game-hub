import { Box } from "@chakra-ui/react";
import React from "react";

interface GameCardContainerProps {
  children: React.ReactNode;
}

function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box
      borderRadius={10}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
