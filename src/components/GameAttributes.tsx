import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../types/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface GameAttributesProps {
  game: Game;
}

function GameAttributes({ game }: GameAttributesProps) {
  return (
    <SimpleGrid as="dl" columns={2} spacing={5} width="100%">
      <DefinitionItem term="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
