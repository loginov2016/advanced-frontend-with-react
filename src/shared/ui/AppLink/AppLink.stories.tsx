import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    /* parameters: {
        layout: 'centered',
    }, */
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        onClick: fn(),
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        children: 'Link Text ',
        theme: AppLinkTheme.PRIMARY,
    },
};
export const SecondaryLight: Story = {
    args: {
        children: 'Link Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const ThirdLight: Story = {
    args: {
        children: 'Link Text',
        theme: AppLinkTheme.THIRD,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Link Text ',
        theme: AppLinkTheme.PRIMARY,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {
    args: {
        children: 'Link Text',
        theme: AppLinkTheme.SECONDARY,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ThirdDark: Story = {
    args: {
        children: 'Link Text',
        theme: AppLinkTheme.THIRD,
    },
};
ThirdDark.decorators = [ThemeDecorator(Theme.DARK)];

export default meta;
