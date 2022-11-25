import React from 'react';

import Blurb from '../src/components/Blurb';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Blurb',
  component: Blurb,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Blurb {...args} />;

export const WithEverything = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithEverything.args = {
  date: '2020-04-15',
  mainTitle: 'London, England',
  callout: 'Register Now',
  children: (
    <p>
      This content could be anything!
    </p>
  ),
};

export const WithNothing = Template.bind({});
WithNothing.args = {
};
