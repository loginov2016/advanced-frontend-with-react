import { classNames } from './classNames';

describe('classNames', () => {
    test('Test with only first param', () => {
        expect(classNames('class1')).toBe('class1');
    });
    test('Test with object class param 1', () => {
        expect(classNames('class1', { class2: true, class3: false })).toBe(
            'class1 class2',
        );
    });
    test('Test with object class param 2', () => {
        expect(classNames('class1', { class2: false, class3: true })).toBe(
            'class1 class3',
        );
    });
    test('Test with additional class param 1', () => {
        expect(
            classNames('class1', { class2: true, class3: false }, [
                'class4',
                'class5',
            ]),
        ).toBe('class1 class2 class4 class5');
    });
    test('Test with additional class param 2', () => {
        expect(
            classNames('class1', { class2: false, class3: false }, [
                'class4',
                'class5',
            ]),
        ).toBe('class1 class4 class5');
    });
});
