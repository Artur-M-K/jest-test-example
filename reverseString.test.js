const reverseString = require('./reverseString');

test('reverseString func exist', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});