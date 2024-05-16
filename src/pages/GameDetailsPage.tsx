import { Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import { useGame } from "../hooks/useGame";

function GameDetailsPage() {
  const { slug } = useParams();
  const { game, isLoading, error } = useGame(slug!);

  if (isLoading) return null;

  if (error || !game) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={5}
    >
      <VStack spacing={10} alignItems="flex-start">
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </VStack>

      <VStack spacing={5}>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </VStack>
    </SimpleGrid>
  );
}

export default GameDetailsPage;
