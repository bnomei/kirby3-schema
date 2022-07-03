const Ajv2020 = require("ajv/dist/2020")
const ajv = new Ajv2020({
    strictTypes: false,
    allowMatchingProperties: true,
})
const schema = ajv.compile(require('./../kirby3-blueprints.schema.json'))

function validate(data) {
    return schema(data)
}

module.exports = validate;
