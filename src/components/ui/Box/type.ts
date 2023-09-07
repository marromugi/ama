import { SPACES } from "./const";

export type BoxProps = {
  variant?: "primary" | "secondary" | "tertiary";
  space?: keyof typeof SPACES;
  block?: boolean;
  children: React.ReactNode;
};
