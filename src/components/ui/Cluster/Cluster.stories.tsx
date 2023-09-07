import type { Meta, StoryObj } from "@storybook/react";

import { Cluster } from ".";
import clsx from "clsx";

const Dummy = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "tw-bg-gray-200 tw-py-4 tw-w-[240px] tw-rounded",
        "tw-flex tw-items-center tw-justify-center",
      )}
    >
      {children}
    </div>
  );
};

const meta: Meta<typeof Cluster> = {
  component: Cluster,
  render: Cluster,
  args: {
    space: "md",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Base: StoryObj<typeof Cluster> = {
  render: (args) => (
    <Cluster {...args}>
      <Dummy>apple</Dummy>
      <Dummy>grape</Dummy>
      <Dummy>orange</Dummy>
    </Cluster>
  ),
};

export default meta;
