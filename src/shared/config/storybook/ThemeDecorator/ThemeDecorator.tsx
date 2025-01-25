import { StoryFn } from '@storybook/react/*';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
//import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', {}, [theme])}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
