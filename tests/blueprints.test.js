const validate = require('./validate')

test('file', () => {
    expect(validate('./tests/fixtures/blueprints/file.yml')).toBeTruthy();
});

test('page', () => {
    expect(validate('./tests/fixtures/blueprints/page.yml')).toBeTruthy();
});

test('site', () => {
    expect(validate('./tests/fixtures/blueprints/site.yml')).toBeTruthy();
});

test('user', () => {
    expect(validate('./tests/fixtures/blueprints/user.yml')).toBeTruthy();
});
