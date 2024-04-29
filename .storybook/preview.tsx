import type { Preview } from "@storybook/react";

import "../src/tailwind.css";
import { poppins } from "../src/app/layout";
import * as React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${poppins.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
