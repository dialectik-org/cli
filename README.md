Dialectik CLI
=================

Dialectik command line interpreter to:
* compile markdown source
* start the dev server

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
$ npm install -g @dialectik/cli
$ dialectik COMMAND
running command...
$ dialectik (--version)
@dialectik/cli/0.0.3 darwin-arm64 node-v18.12.1
$ dialectik --help [COMMAND]
USAGE
  $ dialectik COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dialectik check`](#dialectik-check)
* [`dialectik compile SOURCE`](#dialectik-compile-source)
* [`dialectik dev SOURCE`](#dialectik-dev-source)
* [`dialectik help [COMMANDS]`](#dialectik-help-commands)
* [`dialectik plugins`](#dialectik-plugins)
* [`dialectik plugins:install PLUGIN...`](#dialectik-pluginsinstall-plugin)
* [`dialectik plugins:inspect PLUGIN...`](#dialectik-pluginsinspect-plugin)
* [`dialectik plugins:install PLUGIN...`](#dialectik-pluginsinstall-plugin-1)
* [`dialectik plugins:link PLUGIN`](#dialectik-pluginslink-plugin)
* [`dialectik plugins:uninstall PLUGIN...`](#dialectik-pluginsuninstall-plugin)
* [`dialectik plugins:uninstall PLUGIN...`](#dialectik-pluginsuninstall-plugin-1)
* [`dialectik plugins:uninstall PLUGIN...`](#dialectik-pluginsuninstall-plugin-2)
* [`dialectik plugins update`](#dialectik-plugins-update)

## `dialectik check`

Check for updates

```
USAGE
  $ dialectik check

DESCRIPTION
  Check for updates

EXAMPLES
  $ dialectik check version
```

_See code: [dist/commands/check.ts](https://github.com/dialectik-org/cli/blob/v0.0.3/dist/commands/check.ts)_

## `dialectik compile SOURCE`

Compile Markdown (.md) source

```
USAGE
  $ dialectik compile SOURCE [-i <value>] [-s <value>] [-t <value>] [-c] [-j] [-p] [-l] [-m <value>]

ARGUMENTS
  SOURCE  Markdown source to compile

FLAGS
  -c, --nobundlestyle      Do not bundle style (see style flag)
  -i, --id=<value>         Source identifier
  -j, --nobundlejs         Do not bundle js
  -l, --license            Generate webpack license
  -m, --temporary=<value>  Specify react project temporary directory
  -p, --nobundleimage      Do not bundle Image
  -s, --style=<value>      CSS style source
  -t, --target=<value>     Target directory

DESCRIPTION
  Compile Markdown (.md) source

EXAMPLES
  $ dialectik compile ./hello/hello.md --id Hello
```

_See code: [dist/commands/compile.ts](https://github.com/dialectik-org/cli/blob/v0.0.3/dist/commands/compile.ts)_

## `dialectik dev SOURCE`

Start Dev Server

```
USAGE
  $ dialectik dev SOURCE [-i <value>] [-s <value>]

ARGUMENTS
  SOURCE  Markdown source to compile

FLAGS
  -i, --id=<value>     Source identifier
  -s, --style=<value>  CSS style source

DESCRIPTION
  Start Dev Server

EXAMPLES
  $ dialectik dev ./hello/hello.md --id Hello
```

_See code: [dist/commands/dev.ts](https://github.com/dialectik-org/cli/blob/v0.0.3/dist/commands/dev.ts)_

## `dialectik help [COMMANDS]`

Display help for dialectik.

```
USAGE
  $ dialectik help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dialectik.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `dialectik plugins`

List installed plugins.

```
USAGE
  $ dialectik plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dialectik plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.6/src/commands/plugins/index.ts)_

## `dialectik plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialectik plugins:install PLUGIN...

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
  $ dialectik plugins add

EXAMPLES
  $ dialectik plugins:install myplugin 

  $ dialectik plugins:install https://github.com/someuser/someplugin

  $ dialectik plugins:install someuser/someplugin
```

## `dialectik plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dialectik plugins:inspect PLUGIN...

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
  $ dialectik plugins:inspect myplugin
```

## `dialectik plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialectik plugins:install PLUGIN...

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
  $ dialectik plugins add

EXAMPLES
  $ dialectik plugins:install myplugin 

  $ dialectik plugins:install https://github.com/someuser/someplugin

  $ dialectik plugins:install someuser/someplugin
```

## `dialectik plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dialectik plugins:link PLUGIN

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
  $ dialectik plugins:link myplugin
```

## `dialectik plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialectik plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialectik plugins unlink
  $ dialectik plugins remove
```

## `dialectik plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialectik plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialectik plugins unlink
  $ dialectik plugins remove
```

## `dialectik plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialectik plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialectik plugins unlink
  $ dialectik plugins remove
```

## `dialectik plugins update`

Update installed plugins.

```
USAGE
  $ dialectik plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
