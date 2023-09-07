import { clsx } from "clsx";

export const SPACES = {
  sm: clsx("tw-p-2"),
  md: clsx("tw-p-4"),
  lg: clsx("tw-p-6"),
  xl: clsx("tw-p-8"),
};

export const VARIANTS = {
  primary: clsx("tw-bg-kuro-800"),
  secondary: clsx("tw-bg-kuro-700"),
  tertiary: clsx("tw-bg-kuro-600"),
  deep: clsx("tw-bg-kuro-900"),
  ghost: clsx("tw-bg-transparent"),
};
