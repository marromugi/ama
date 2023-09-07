import { StackProps } from "./type";
import { clsx } from "clsx";

export const SPACES: { [key in StackProps["space"]]: string } = {
  sm: clsx("tw-gap-2"),
  md: clsx("tw-gap-4"),
  lg: clsx("tw-gap-6"),
  xl: clsx("tw-gap-8"),
};
