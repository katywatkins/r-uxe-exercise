/* eslint-disable no-alert */
import React from 'react';

import Button from '../src/components/Button';

const alertText = 'Just validating that something happens when this is clicked';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'Book your London trip',
  onClick: () => alert(alertText),
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Book your London trip',
  type: 'secondary',
  onClick: () => alert(alertText),
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  text: 'Book your London trip',
  type: 'tertiary',
  onClick: () => alert(alertText),
};
