import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import NotFoundPage from './NotFoundPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPageLight: Story = {};

export const NotFoundPageDark: Story = {};

NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
