import { StoryFn } from '@storybook/react/*';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export const RouterDecorator = (story: () => React.ReactNode) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
    
};
