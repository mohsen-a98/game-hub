import { FetchResponse } from "../types/FetchResponse";
import { Platform } from "../types/Platform";
import apiClient from "./api-client";

export const getPlatforms = async () => {
  const data = await apiClient
    .get<FetchResponse<Platform>>("/platforms/lists/parents")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err.message);
      throw new Error(err.message);
    });
  return data;
};
