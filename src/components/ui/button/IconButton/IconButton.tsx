import clsx from "clsx";
import { IconButtonProps } from "./type";
import { forwardRef } from "react";

export const IconButton = forwardRef<HTMLInputElement, IconButtonProps>(
  ({ icon: Icon, type = "button", ...props }, ref) => {
    return (
      <button
        className={clsx(
          "tw-transition-all",
          "tw-w-8 tw-h-8",
          "tw-flex tw-items-center tw-justify-center",
          "tw-rounded",
          "hover:tw-bg-sumi-600",
          "disabled:tw-opacity-disabled",
        )}
        type={type}
        {...props}
      >
        <Icon className={clsx("tw-w-5 tw-h-5", "tw-text-sumi-50")} />
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
