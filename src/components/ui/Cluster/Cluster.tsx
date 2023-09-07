import clsx from "clsx";
import { SPACES } from "./const";
import { StackProps } from "./type";

export const Cluster = ({
  space,
  wrap = false,
  children,
}: StackProps) => {
  return (
    <div
      className={clsx("tw-flex", wrap && "tw-flex-wrap", SPACES[space])}
    >
      {children}
    </div>
  );
};
