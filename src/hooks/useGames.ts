import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { getGames } from "../services/gamesApi";
import { type GameQuery } from "../store";

export const useGames = (gameQuery: GameQuery) => {
  const {
    data: games,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [
      "games",
      gameQuery?.genreId,
      gameQuery?.platformId,
      gameQuery?.sortOrder,
      gameQuery?.searchText,
    ].filter(Boolean),
    queryFn: ({ pageParam = 1 }) => getGames(gameQuery, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"),
  });

  return {
    games,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};
