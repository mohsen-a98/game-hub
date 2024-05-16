import { useQuery } from "@tanstack/react-query";
import { getGame } from "../services/gamesApi";

export const useGame = (slug: string) => {
  const {
    data: game,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["game", slug],
    queryFn: () => getGame(slug!),
  });

  return { game, isLoading, error };
};
