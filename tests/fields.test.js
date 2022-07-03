const validate = require('./validate')

test('fields', () => {
    expect(validate('./tests/fixtures/fields/files.yml')).toBeTruthy();
});

test('sections', () => {
    expect(validate('./tests/fixtures/fields/text.yml')).toBeTruthy();
});
