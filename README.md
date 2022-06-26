# kirby3-schema

## Setup

### Schemastore (not yet)

Ideally the schema of this repo would be available from the [Schemastore](https://www.schemastore.org/json/) and it would be almost zero configutation in most IDEs. But that is something the Kirby 3 CMS team should do eventually, not me. Let's focus on getting the schema done first.

### Manual IDE configuration

#### VSCode

VSCode will only use the Schemastore but no local files as far as I could find out. There was a `json.schema` setting but that does not work anymore. But maybe there is a way... create an issue or PR to this readme if you know how to set this up.

#### PHP Storm

Clone this repo to your local machine. Open the IDE settings and search for `JSON Schema`. Then select `Languages & Frameworks` » `Schemas and DTDs` » `JSON Schema Mappings`. Click the `+` button at the top to add a new JSON schema configuration. Then fill in the corresponding name, file or URL, and version.

For testing I mapped it to my `site/blueprints` folder.

#### Enforce Schema for a file

You can enforce a certain schema in adding a special header comment. Which will most probably be needed even with Schemastore setup since Kirby uses plain `*.yml` extension for blueprints and not something like `*.kirby.yml`.

**site/blueprints/pages/default.yml**
```yaml
# yaml-language-server: $schema=https://getkirby.com/schema/blueprints.schema.json

title: Default Page Blueprint

fields:
  text:
    type: text
```

## Roadmap

I created the basic structure and validation for the four blueprint types, added the wrappers and all sections but only 2 of the fields. That was around 1500 lines and I got a bit bored. I will continue this later. Feel free to PR definitions of missing fields in the meantime but watch out for any open PRs before you start working on one.