const validate = require('./validate')

test('fields', () => {
    expect(validate('./tests/fixtures/files/default.yml')).toBeTruthy();
});
