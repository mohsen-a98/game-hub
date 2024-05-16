import { Heading } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { usePlatform } from "../hooks/usePlatform";
import useGameQueryStore from "../store";

function GameHeading() {
  const { gameQuery } = useGameQueryStore();
  const { genres } = useGenres();
  const { platforms } = usePlatform();

  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms?.results?.find(
    (platform) => platform.id === gameQuery.platformId
  );

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={6}>
      {platform?.name || ""} {genre?.name || ""} Games
    </Heading>
  );
}

export default GameHeading;
