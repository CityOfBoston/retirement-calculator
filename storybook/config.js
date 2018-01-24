import { configure } from "@storybook/react";

const storiesContext = require.context("../stories", true, /.js$/);

function loadStories() {
  storiesContext.keys().forEach(f => {
    console.log(f);
    storiesContext(f);
  });
}

configure(loadStories, module);


