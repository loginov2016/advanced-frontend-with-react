import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from './Modal';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

//import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
//import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
        loki: {
            skip: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing tempore pariatur',
        isOpen: true,
    },
};

export const Dark: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing tempore pariatur',
        isOpen: true,
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
