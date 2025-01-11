import { classNames } from './classNames';

function forEach(items: any[], callback: (item: any) => any) {
    for (const item of items) {
        callback(item);
    }
}

describe('classNames', () => {
    test('Test Mock Function', () => {
        const mockCallback = jest.fn(x => 3 * x);
        //console.log(mockCallback);
        forEach([1, 2, 3], mockCallback);
        console.log(mockCallback.mock);
        //console.log(mockCallback.mock.calls);
        expect(mockCallback.mock.calls).toHaveLength(3);
        expect(mockCallback.mock.calls[1][0]).toBe(2);
    });
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
