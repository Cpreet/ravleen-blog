import { addons } from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  theme,
  toolbar: {
    zoom: {
      hidden: true,
    },
    copy: { hidden: true },
    measure: { hidden: true },
    'storybook/background': {hidden: true},
    'storybook/a11y': {hidden: true},
  }
});
