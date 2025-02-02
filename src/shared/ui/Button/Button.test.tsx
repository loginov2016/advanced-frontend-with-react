import { render, screen } from '@testing-library/react';

// После тог как установил здесь импорт библиотеки @testing-library/jest-dom
//метод toBeInDocument появился.
import '@testing-library/jest-dom';
import { Button, ButtonTheme } from './Button';
import React from 'react';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
