import type { Meta, StoryObj } from '@storybook/vue3-vite';

import HelloWorld from './HelloWorld.vue';

const meta = {
  title: 'Hello World',
  component: HelloWorld,
  argTypes: {},
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    msg: 'Welcome to Vue Starter',
  },
};
