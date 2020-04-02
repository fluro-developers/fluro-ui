import Vue from 'vue';
import Vuex from 'vuex';
import { storiesOf } from '@storybook/vue';

import FluroUI from '../src/fluro-ui';

Vue.use(Vuex);
Vue.use(FluroUI);

const withSettings = component => ({
  fluroUISettings: new FluroUI(),
  ...component
});

const stories = storiesOf('FluroUI', module);

stories
  // Add some stories here to make your plugin more descriptive
  .add(
    'My Customs  Component',
    () =>
      withSettings({
        template: `
        <div>
          <fluro-ui />
        </div>
      `
      }),
    {
      notes: `
        # Using \`fluro-ui\`

        \`\`\`html
        <template>
          <fluro-ui />
        </template>
        \`\`\`
      `
    }
  )
  .add(
    'My Custom Component with another markup',
    () =>
      withSettings({
        template: `
        <div>
          <b>Hello</b>
          <fluro-ui />
          <i>world</i>
        </div>
      `
      }),
    {
      notes: `
        # Using \`fluro-ui\` with other components

        \`\`\`html
        <template>
          <div>
            <b>Hello</b>
            <fluro-ui />
            <i>world</i>
          </div>
        </template>
        \`\`\`
      `
    }
  );
