/*
 * Ошибка "React is not defined." в Storybook.
 * Если вы используете новые версии Storybook, он по умолчанию использует компилятор SWC,
 * и вам нужно немного изменить конфигурацию main.ts.
 * https://stackoverflow.com/questions/74995855/storybook-canvas-referenceerror-react-is-not-defined
 * The SWC compiler doesn't work with React.
 * Если вы включили параметр SWC Builder в проекте на основе React и не импортируете React
 * в свои файлы явным образом, это может привести к сбою загрузки Storybook. SWC не импортирует
 * модуль автоматически при использовании компоновщика SWC. Чтобы решить эту проблему, вам необходимо
 * настроить файл конфигурации Storybook.
 * https://storybook.js.org/docs/configure/integration/compilers#the-swc-compiler-doesnt-work-with-react
 */

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    swc: () => ({
        jsc: {
            transform: {
                react: {
                    runtime: 'automatic',
                },
            },
        },
    }),
};
export default config;
