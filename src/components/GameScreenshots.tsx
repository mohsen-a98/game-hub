import { Image, SimpleGrid } from "@chakra-ui/react";
import { useScreenshots } from "../hooks/useScreenshots";

interface GameScreenshotProps {
  gameId: number;
}

function GameScreenshots({ gameId }: GameScreenshotProps) {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error || !data) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={2}
    >
      {data.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} borderRadius={2} />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
