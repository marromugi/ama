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
}) => {
  const res = useSWR(key, async () => fetcher(), config);
  return {
    result: res.data,
    error: res.error,
    mutate: res.mutate,
    loading: res.isLoading,
    validating: res.isValidating,
  };
};
