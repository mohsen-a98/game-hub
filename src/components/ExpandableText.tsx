import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ExpandableTextProps {
  children: string;
}

function ExpandableText({ children }: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : `${children.substring(0, limit)}...`;

  return (
    <Box>
      <Heading as="h3" size="md" marginBottom={2}>
        About
      </Heading>
      <Text>{summary}</Text>
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
}

export default ExpandableText;
