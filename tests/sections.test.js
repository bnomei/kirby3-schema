const validate = require('./validate')

test('fields', () => {
    expect(validate('./tests/fixtures/sections/fields.yml')).toBeTruthy();
});

test('files', () => {
    expect(validate('./tests/fixtures/sections/files.yml')).toBeTruthy();
});

test('info', () => {
    expect(validate('./tests/fixtures/sections/info.yml')).toBeTruthy();
});

test('pages', () => {
    expect(validate('./tests/fixtures/sections/pages.yml')).toBeTruthy();
});

test('stats', () => {
    expect(validate('./tests/fixtures/sections/stats.yml')).toBeTruthy();
});
