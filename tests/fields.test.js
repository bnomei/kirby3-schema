const validate = require('./validate')

test('files', () => {
    expect(validate('./tests/fixtures/fields/files.yml')).toBeTruthy();
});

test('text', () => {
    expect(validate('./tests/fixtures/fields/text.yml')).toBeTruthy();
});
