const validate = require('./validate')

test('fields', () => {
    expect(validate(require('./fixtures/wrappers/fields.yml'))).toBeTruthy();
});

test('sections', () => {
    expect(validate(require('./fixtures/wrappers/sections.yml'))).toBeTruthy();
});
