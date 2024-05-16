import { useQuery } from "@tanstack/react-query";
import { getGameTrailers } from "../services/gamesApi";

export const useTrailers = (gameId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trailers", gameId],
    queryFn: () => getGameTrailers(gameId),
  });
  return { data, isLoading, error };
};
