import { createAbby } from "@tryabby/svelte";

export const { useAbby, AbbyProvider, useFeatureFlag, withAbby , __abby__, getABResetFunction} = createAbby({
  projectId: "clhomr74n0000mk087fjib7o7",
  currentEnvironment: process.env.NODE_ENV,
  tests: {
    "New Test": {
      variants: ["A", "B", "C"],
    },
  },
  flags: ["clientFeature", "serverFeature"],
});