import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { getGenres } from "../services/genreApi";

export const useGenres = () => {
  const {
    data: genres,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    staleTime: ms("24h"),
  });

  return { genres, isLoading, error };
};
