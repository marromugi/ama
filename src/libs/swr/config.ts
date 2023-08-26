import { SWRConfig } from "swr";

export const swrBaseConfig: Required<
  (typeof SWRConfig)["defaultProps"]
> = {
  value: {
    onSuccess: () => {
      console.log("success");
    },
    onError: (err) => {
      console.log(err);
    },
  },
  children: null,
};
