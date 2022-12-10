import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { CountSelector, useCountSelector } from '.';

const Story: ComponentMeta<typeof CountSelector> = {
  component: CountSelector,
  title: 'CountSelector',
  argTypes: {
    onValueChange: { action: 'onValueChange executed!' },
  },
};
export default Story;


const Template: ComponentStory<typeof CountSelector> = (args) => {
  return (
    <CountSelector {...args} />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: '',
  value: 0,
};
