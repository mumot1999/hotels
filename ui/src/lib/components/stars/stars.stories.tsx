import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stars } from './stars';

const Story: ComponentMeta<typeof Stars> = {
  component: Stars,
  title: 'Stars',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
};
export default Story;

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  stars: 0,
};
