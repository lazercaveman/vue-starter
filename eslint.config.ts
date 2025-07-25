import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import pluginOxlint from 'eslint-plugin-oxlint'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores([
    'node_modules',
    'coverage',
    'cypress.config.ts',
    'dist',
    '.storybook',
    '.yarn',
    '.output',
  ]),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  ...pluginOxlint.configs['flat/recommended'],

  {
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'vue/multi-word-component-names': [
        'error',
        { ignores: ['index','demo','default','error','[id]'] },
      ],
    },
  },
  {
    files: ['src/pages/**/*.vue', 'pages/**/*.vue'], // Adjust the path to your 'pages' folder if needed
    rules: {
      'vue/multi-word-component-names': 'off', // Turn off the rule for files in 'pages'
    },
  }
)
