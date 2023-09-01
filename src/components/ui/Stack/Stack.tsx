import clsx from "clsx";
import { SPACES } from "./const";
import { StackProps } from "./type";

export const Stack = ({ space, children }: StackProps) => {
  return (
    <div className={clsx("tw-flex tw-flex-col", SPACES[space])}>
      {children}
    </div>
  );
};
