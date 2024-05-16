import { GameQuery } from "../store";
import { FetchResponse } from "../types/FetchResponse";
import { Game } from "../types/Game";
import { Screenshot } from "../types/Screenshot";
import { Trailer } from "../types/Trailer";
import apiClient from "./api-client";

export const getGames = async (gameQuery: GameQuery, pageParam: number) => {
  const data = await apiClient
    .get<FetchResponse<Game>>("/games", {
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    })
    .then((res) => res.data);

  return data;
};

export const getGame = async (slug: string) => {
  const data = await apiClient
    .get<Game>(`/games/${slug}`)
    .then((res) => res.data);

  return data;
};

export const getGameTrailers = async (gameId: number) => {
  const data = await apiClient
    .get<FetchResponse<Trailer>>(`/games/${gameId}/movies`)
    .then((res) => res.data);

  return data;
};

export const getGameScreenshots = async (gameId: number) => {
  const data = await apiClient
    .get<FetchResponse<Screenshot>>(`/games/${gameId}/screenshots`)
    .then((res) => res.data);

  return data;
};
