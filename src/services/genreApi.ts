import { FetchResponse } from "../types/FetchResponse";
import { Genre } from "../types/Genre";
import apiClient from "./api-client";

export const getGenres = async () => {
  const data = await apiClient
    .get<FetchResponse<Genre>>("/genres")
    .then((res) => res.data)
    .catch((err) => {
      console.error(err.message);
      throw new Error(err.message);
    });

  return data;
};
