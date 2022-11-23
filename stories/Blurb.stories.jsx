import React from 'react';

import Blurb from '../src/components/Blurb';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Blurb',
  component: Blurb,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Blurb {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  date: '2020-04-15',
  mainTitle: 'London, England',
  callout: 'Register Now',
  children: (
    <p className="default-text">
      Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio
      quaerimus igitur, quid et caritatem, quae sine causa? quae fuerit causa,
      mox video; interea hoc epicurus in culpa, qui blanditiis praesentium
      voluptatum adipiscendarum causa aut officiis debits aut fugit, sed uti
      oratione perpetua.
    </p>
  ),
};
