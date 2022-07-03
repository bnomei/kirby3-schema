const validate = require('./validate')

test('fields', () => {
    expect(validate('./tests/fixtures/wrappers/fields.yml')).toBeTruthy();
});

test('sections', () => {
    expect(validate('./tests/fixtures/wrappers/sections.yml')).toBeTruthy();
});

test('columns', () => {
    expect(validate('./tests/fixtures/wrappers/columns.yml')).toBeTruthy();
});

test('tabs', () => {
    expect(validate('./tests/fixtures/wrappers/tabs.yml')).toBeTruthy();
});
