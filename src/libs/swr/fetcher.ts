"use client";

import { PublicConfiguration, FetcherResponse } from "swr/_internal";
import useSWR from "swr";

export const useFetch = <T>({
  key,
  fetcher,
  config,
}: {
  key: string;
  fetcher: () => Promise<T>;
  config?:
    | Partial<
        PublicConfiguration<T, any, (arg: string) => FetcherResponse<T>>
      >
    | undefined;
}) => useSWR(key, async () => fetcher(), config);
