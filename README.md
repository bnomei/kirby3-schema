# Kirby 3 Schema

![Release](https://flat.badgen.net/github/release/bnomei/kirby3-schema?color=ae81ff)
![Downloads](https://flat.badgen.net/github/assets-dl/bnomei/kirby3-schema?color=272822)
[![Twitter](https://flat.badgen.net/badge/twitter/bnomei?color=66d9ef)](https://twitter.com/bnomei)

JSON Schema file for Kirby 3 blueprints

## Commercial Usage

> <br>
> <b>Support open source!</b><br><br>
> This schema file is free but if you use it in a commercial project please consider to sponsor me or make a donation.<br>
> If my work helped you to make some cash it seems fair to me that I might get a little reward as well, right?<br><br>
> Be kind. Share a little. Thanks.<br><br>
> &dash; Bruno<br>
> &nbsp;

| M | O | N | E | Y |
|---|----|---|---|---|
| [Github sponsor](https://github.com/sponsors/bnomei) | [Patreon](https://patreon.com/bnomei) | [Buy Me a Coffee](https://buymeacoff.ee/bnomei) | [Paypal dontation](https://www.paypal.me/bnomei/15) | [Hire me](mailto:b@bnomei.com?subject=Kirby) |

## Install

### Schemastore (not yet)

Ideally the schema of this repo would be available from the [Schemastore](https://www.schemastore.org/json/) and it would be almost zero configuration in most IDEs. But that is something the Kirby 3 CMS team should do eventually, not me.

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

### Blueprint detection

Since Kirby reuses some types like `file`, `info`, `pages` in fields and sections the schema can not always determine which blueprint you are working on with absolute certainty. For now I introduced a `blueprint` property to solve this. Use it in your `file`, `page`, `user` and `site` blueprints.  

```diff
+ blueprint: site

title: My Site Blueprint

fields:
  text:
    type: text
```

```diff
+ blueprint: page

title: My Page Blueprint

fields:
  text:
    type: text
```

## Disclaimer

This schema is provided "as is" with no guarantee. Use it at your own risk and always test it yourself before using it in a production environment. If you find any issues, please [create a new issue](https://github.com/bnomei/kirby3-schema/issues/new).

## License

[MIT](https://opensource.org/licenses/MIT)

It is discouraged to use this schema in any project that promotes racism, sexism, homophobia, animal abuse, violence or any other form of hate speech.
