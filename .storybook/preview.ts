import { setup } from '@storybook/vue3';
import type { Preview } from '@storybook/vue3-vite';
import { createPinia } from 'pinia';

import '@/assets/style/tailwind.css';

setup((app) => {
  const pinia = createPinia();
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'alpha',
    },
  },
  tags: ['autodocs'],
};

export default preview;
