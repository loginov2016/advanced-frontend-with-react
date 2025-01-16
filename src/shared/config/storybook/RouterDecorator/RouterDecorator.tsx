import { StoryFn } from '@storybook/react/*';
import { BrowserRouter } from 'react-router-dom';
import React, {ReactNode} from 'react';

export const RouterDecorator = (story: () => ReactNode) => {
    return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
    );
    
};
