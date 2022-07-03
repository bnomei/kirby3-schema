const validate = require('./validate')

test('fields', () => {
    expect(validate('./tests/fixtures/sections/fields.yml')).toBeTruthy();
});

test('sections', () => {
    expect(validate('./tests/fixtures/sections/pages.yml')).toBeTruthy();
});
