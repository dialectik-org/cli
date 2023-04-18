oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ dialectik-cli COMMAND
running command...
$ dialectik-cli (--version)
cli/0.0.0 darwin-arm64 node-v18.12.1
$ dialectik-cli --help [COMMAND]
USAGE
  $ dialectik-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dialectik-cli hello PERSON`](#dialectik-cli-hello-person)
* [`dialectik-cli hello world`](#dialectik-cli-hello-world)
* [`dialectik-cli help [COMMANDS]`](#dialectik-cli-help-commands)
* [`dialectik-cli plugins`](#dialectik-cli-plugins)
* [`dialectik-cli plugins:install PLUGIN...`](#dialectik-cli-pluginsinstall-plugin)
* [`dialectik-cli plugins:inspect PLUGIN...`](#dialectik-cli-pluginsinspect-plugin)
* [`dialectik-cli plugins:install PLUGIN...`](#dialectik-cli-pluginsinstall-plugin-1)
* [`dialectik-cli plugins:link PLUGIN`](#dialectik-cli-pluginslink-plugin)
* [`dialectik-cli plugins:uninstall PLUGIN...`](#dialectik-cli-pluginsuninstall-plugin)
* [`dialectik-cli plugins:uninstall PLUGIN...`](#dialectik-cli-pluginsuninstall-plugin-1)
* [`dialectik-cli plugins:uninstall PLUGIN...`](#dialectik-cli-pluginsuninstall-plugin-2)
* [`dialectik-cli plugins update`](#dialectik-cli-plugins-update)

## `dialectik-cli hello PERSON`

Say hello

```
USAGE
  $ dialectik-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/rognierbenoit/cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `dialectik-cli hello world`

Say hello world

```
USAGE
  $ dialectik-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ dialectik-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `dialectik-cli help [COMMANDS]`

Display help for dialectik-cli.

```
USAGE
  $ dialectik-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dialectik-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `dialectik-cli plugins`

List installed plugins.

```
USAGE
  $ dialectik-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dialectik-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.4/src/commands/plugins/index.ts)_

## `dialectik-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialectik-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dialectik-cli plugins add

EXAMPLES
  $ dialectik-cli plugins:install myplugin 

  $ dialectik-cli plugins:install https://github.com/someuser/someplugin

  $ dialectik-cli plugins:install someuser/someplugin
```

## `dialectik-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dialectik-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dialectik-cli plugins:inspect myplugin
```

## `dialectik-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialectik-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ dialectik-cli plugins add

EXAMPLES
  $ dialectik-cli plugins:install myplugin 

  $ dialectik-cli plugins:install https://github.com/someuser/someplugin

  $ dialectik-cli plugins:install someuser/someplugin
```

## `dialectik-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dialectik-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dialectik-cli plugins:link myplugin
```

## `dialectik-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialectik-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialectik-cli plugins unlink
  $ dialectik-cli plugins remove
```

## `dialectik-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialectik-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialectik-cli plugins unlink
  $ dialectik-cli plugins remove
```

## `dialectik-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialectik-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialectik-cli plugins unlink
  $ dialectik-cli plugins remove
```

## `dialectik-cli plugins update`

Update installed plugins.

```
USAGE
  $ dialectik-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
