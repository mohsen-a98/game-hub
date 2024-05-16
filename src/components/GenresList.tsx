import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import GenresListSkeleton from "./GenresListSkeleton";
import useGameQueryStore from "../store";

function GenresList() {
  const { genres, isLoading } = useGenres();
  const { gameQuery, setGenreId } = useGameQueryStore();

  return (
    <List>
      {isLoading ? (
        <GenresListSkeleton />
      ) : (
        genres?.results.map((g) => (
          <ListItem key={g.id} paddingY={"6px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(g.image_background)}
                alt={g.name}
                borderRadius={8}
                objectFit="cover"
                boxSize="32px"
              />
              <Button
                onClick={() => setGenreId(g.id)}
                variant="link"
                fontSize="lg"
                fontWeight={gameQuery.genreId === g.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))
      )}
    </List>
  );
}

export default GenresList;
