# kirby3-validate

## Setup

### Schemastore (not yet)

Ideally the validate of this repo would be available from the [Schemastore](https://www.schemastore.org/json/) and it would be almost zero configutation in most IDEs. But that is something the Kirby 3 CMS team should do eventually, not me. Let's focus on getting the validate done first.

### Manual IDE configuration

#### VSCode

You will need the [Red Hat VS Code YAML Extension](https://github.com/redhat-developer/vscode-yaml) and then you can use the `yaml.schemas` setting to add your schema like this:

```yaml
  "yaml.schemas": {
    "/path/to/your/schema/kirby3-blueprints.schema.json": "site/blueprints/**/*.yml"
  }
```

This will automatically use the schema for all blueprint files.

The extension prepends `/` on the path so its `/~/YOUR_FOLDER/kirby3-schema/kirby3-blueprints.schema.json`.

> thanks @tobimori and @iskrisis

#### PHP Storm

Clone this repo to your local machine. Open the IDE settings and search for `JSON Schema`. Then select `Languages & Frameworks` » `Schemas and DTDs` » `JSON Schema Mappings`. Click the `+` button at the top to add a new JSON validate configuration. Then fill in the corresponding name, file or URL, and version.

For testing I mapped it to my `site/blueprints` folder.

#### Enforce Schema for a file

You can enforce a certain validate in adding a special header comment. Which will most probably be needed even with Schemastore setup since Kirby uses plain `*.yml` extension for blueprints and not something like `*.kirby.yml`.

**site/blueprints/pages/default.yml**
```yaml
# yaml-language-server: $validate=https://getkirby.com/validate/blueprints.validate.json

title: Default Page Blueprint

fields:
  text:
    type: text
```

## Roadmap

I created the basic structure and validation for the four blueprint types, added the wrappers and all sections but only 2 of the fields. That was around 1500 lines and I got a bit bored. I will continue this later. Feel free to PR definitions of missing fields in the meantime but watch out for any open PRs before you start working on one.

we “just” need to link all props (`$defs/fields`) and add some missing prop definitions (`$defs/field-properties`).


