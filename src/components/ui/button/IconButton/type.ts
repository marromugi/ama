import { CakeIcon } from "@heroicons/react/24/solid"; // 型取得のためにimport

export type IconButtonProps = Omit<
  JSX.IntrinsicElements["button"],
  "className"
> & {
  icon: typeof CakeIcon;
};
