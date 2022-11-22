import React from 'react';

import Card from '../src/components/Card';
import london from '../src/img/london-img.jpg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const cardText = (
  <div>
    <p>Register Now</p>
    <h2>London, England</h2>
    <time dateTime="2020-04-15">April 15, 2020</time>
    <p>
      Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio
      quaerimus igitur, quid et caritatem, quae sine causa? quae fuerit causa,
      mox video; interea hoc epicurus in culpa, qui blanditiis praesentium
      voluptatum adipiscendarum causa aut officiis debits aut fugit, sed uti
      oratione perpetua.
    </p>
  </div>
);
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const WithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImage.args = {
  children: cardText,
  image: <img src={london} alt="Corner shop in London" />,
};
export const NoImage = Template.bind({});
NoImage.args = {
  children: cardText,
};
