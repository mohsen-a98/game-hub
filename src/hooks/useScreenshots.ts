import { useQuery } from "@tanstack/react-query";
import { getGameScreenshots } from "../services/gamesApi";

export const useScreenshots = (gameId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: () => getGameScreenshots(gameId),
  });

  return { data, isLoading, error };
};
