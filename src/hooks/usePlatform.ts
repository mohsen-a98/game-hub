import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { getPlatforms } from "../services/platformApi";

export const usePlatform = () => {
  const {
    data: platforms,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["platforms"],
    queryFn: getPlatforms,
    staleTime: ms("24h"),
  });

  return { platforms, isLoading, error };
};
