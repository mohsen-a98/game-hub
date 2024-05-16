import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGames } from "../hooks/useGames";
import useGameQueryStore from "../store";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { gameQuery } = useGameQueryStore();
  const { games, isLoading, error, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = Array.from({ length: 6 }, (_, i) => i + 1);
  const fetchedGamesCount = games?.pages.reduce(
    (acc, page) => acc + page.results.length,
    0
  );

  if (error) return <Text>Something went wrong: {error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      hasMore={hasNextPage}
      next={fetchNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
