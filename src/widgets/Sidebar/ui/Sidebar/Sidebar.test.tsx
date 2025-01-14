import { fireEvent, render, screen } from '@testing-library/react';
//import {describe, expect, test} from '@jest/globals';
import '@testing-library/jest-dom';
import { Sidebar } from './Sidebar';
//import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

//console.log(jest.fn(x => 3 * x));

describe('Sidebar', () => {
    test('Test Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
