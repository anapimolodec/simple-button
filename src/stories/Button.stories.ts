import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';

// export default {
//   title: 'Example/Button',
//   component: Button,
// } as Meta<typeof Button>;
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
};
export default meta;
//create a “template” of how args map to rendering (from SB)
// const Template: StoryObj<typeof Button> = (args) => <Button {...args} />;
type Template = StoryObj<typeof Button>;
//created two variations of the button
export const Default:  Template = {
  args :{
    radius: 50,
    backgroundColor: '#ff8b8b',
    emoji: 'clap'
  },
};


export const Circle: Template = {
  args: {
    radius: 100,
    backgroundColor: 'blue',
    emoji: 'clap'
  },
};

// import type { Meta, StoryObj } from '@storybook/react';

// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
// const meta: Meta<typeof Button> = {
//   title: 'Example/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {
//     backgroundColor: {
//       control: 'color',
//     },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
