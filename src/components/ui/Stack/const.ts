import { StackProps } from "./type";
import { clsx } from "clsx";

export const SPACES: { [key in StackProps["space"]]: string } = {
  sm: clsx("tw-gap-y-2"),
  md: clsx("tw-gap-y-4"),
  lg: clsx("tw-gap-y-6"),
  xl: clsx("tw-gap-y-8"),
};
