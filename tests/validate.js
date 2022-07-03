const Ajv2020 = require("ajv/dist/2020")
const ajv = new Ajv2020({
    strictTypes: false,
    allowMatchingProperties: true,
})
const schema = ajv.compile(require('./../kirby3-blueprints.schema.json'))
const fs = require('fs');
const yaml = require('js-yaml')

function validate(fixture) {
    let fileContents = fs.readFileSync(fixture, 'utf8')
    return schema(yaml.load(fileContents))
}

module.exports = validate;
