import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Loader from './Loader';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        theme: Theme.DARK,
    },
};

export const Dark: Story = {
    args: {
        theme: Theme.DARK,
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
