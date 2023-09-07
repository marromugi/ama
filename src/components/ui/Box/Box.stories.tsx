import type { Meta, StoryObj } from "@storybook/react";

import { Box } from ".";
import clsx from "clsx";

const Dummy = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "tw-bg-gray-200 tw-py-4 tw-w-[240px] tw-rounded",
        "tw-flex tw-items-center tw-justify-center",
        "tw-text-sumi-900",
      )}
    >
      {children}
    </div>
  );
};

const meta: Meta<typeof Box> = {
  component: Box,
  render: Box,
  args: {
    space: "md",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Base: StoryObj<typeof Box> = {
  render: (args) => (
    <Box {...args}>
      <Dummy>apple</Dummy>
    </Box>
  ),
};

export default meta;
