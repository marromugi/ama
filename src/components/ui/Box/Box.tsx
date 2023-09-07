import clsx from "clsx";
import { SPACES } from "./const";
import { BoxProps } from "./type";

export const Box = ({
  variant,
  block = true,
  space = "md",
  children,
}: BoxProps) => {
  return (
    <div
      className={clsx(
        "tw-rounded tw-bg-slate-800 tw-text-white",
        block ? "tw-w-full" : "tw-w-fit",
        SPACES[space],
      )}
    >
      {children}
    </div>
  );
};
