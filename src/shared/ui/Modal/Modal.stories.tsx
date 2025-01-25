import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from './Modal';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'; //'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider'; //'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
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
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate laborum esse est autem iure architecto perspiciatis tenetur facilis sed laboriosam tempore pariatur excepturi et distinctio, placeat eveniet animi. Nobis sunt repellat repellendus cupiditate eveniet mollitia beatae quos? Assumenda ipsa accusantium expedita ratione, eligendi nostrum dolorum in doloribus amet. Saepe culpa cumque, qui nesciunt, doloremque tempora ipsam laudantium non praesentium ut ab ad quasi. Perferendis vero veritatis aliquid similique libero eius harum ad! Ab placeat fugit vel voluptas, magnam minima, impedit voluptatibus, distinctio illum laudantium explicabo sint! Sint obcaecati quibusdam dolores aliquid. Accusantium ratione vel quasi fuga, dolorem soluta beatae?',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate laborum esse est autem iure architecto perspiciatis tenetur facilis sed laboriosam tempore pariatur excepturi et distinctio, placeat eveniet animi. Nobis sunt repellat repellendus cupiditate eveniet mollitia beatae quos? Assumenda ipsa accusantium expedita ratione, eligendi nostrum dolorum in doloribus amet. Saepe culpa cumque, qui nesciunt, doloremque tempora ipsam laudantium non praesentium ut ab ad quasi. Perferendis vero veritatis aliquid similique libero eius harum ad! Ab placeat fugit vel voluptas, magnam minima, impedit voluptatibus, distinctio illum laudantium explicabo sint! Sint obcaecati quibusdam dolores aliquid. Accusantium ratione vel quasi fuga, dolorem soluta beatae?',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
