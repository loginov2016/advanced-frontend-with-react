import jest from

function forEach(items, callback) {
    for (const item of items) {
        callback(item);
    }
}

const mockCallback = jest.fn(x => 3 * x);

console.log(mockCallback);
