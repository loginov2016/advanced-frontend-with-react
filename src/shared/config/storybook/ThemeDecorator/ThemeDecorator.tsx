import { StoryFn } from '@storybook/react/*';
import { Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
//import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={classNames('app', {}, [theme])}>
            <StoryComponent />
        </div>
    );
};
