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
$ dialecli COMMAND
running command...
$ dialecli (--version)
@dialectik/cli/0.0.2 darwin-arm64 node-v18.12.1
$ dialecli --help [COMMAND]
USAGE
  $ dialecli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dialecli compile SOURCE`](#dialecli-compile-source)
* [`dialecli dev SOURCE`](#dialecli-dev-source)
* [`dialecli help [COMMANDS]`](#dialecli-help-commands)
* [`dialecli plugins`](#dialecli-plugins)
* [`dialecli plugins:install PLUGIN...`](#dialecli-pluginsinstall-plugin)
* [`dialecli plugins:inspect PLUGIN...`](#dialecli-pluginsinspect-plugin)
* [`dialecli plugins:install PLUGIN...`](#dialecli-pluginsinstall-plugin-1)
* [`dialecli plugins:link PLUGIN`](#dialecli-pluginslink-plugin)
* [`dialecli plugins:uninstall PLUGIN...`](#dialecli-pluginsuninstall-plugin)
* [`dialecli plugins:uninstall PLUGIN...`](#dialecli-pluginsuninstall-plugin-1)
* [`dialecli plugins:uninstall PLUGIN...`](#dialecli-pluginsuninstall-plugin-2)
* [`dialecli plugins update`](#dialecli-plugins-update)

## `dialecli compile SOURCE`

Compile Markdown (.md) source

```
USAGE
  $ dialecli compile SOURCE [-i <value>] [-s <value>] [-t <value>] [-c] [-j] [-p] [-l] [-m <value>]

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
  $ dialecli compile ./hello/hello.md --id Hello
```

_See code: [dist/commands/compile/index.ts](https://github.com/dialectik-org/cli/blob/v0.0.2/dist/commands/compile/index.ts)_

## `dialecli dev SOURCE`

Starts Dev Server

```
USAGE
  $ dialecli dev SOURCE [-i <value>] [-s <value>]

ARGUMENTS
  SOURCE  Markdown source to compile

FLAGS
  -i, --id=<value>     Source identifier
  -s, --style=<value>  CSS style source

DESCRIPTION
  Starts Dev Server

EXAMPLES
  $ dialectik dev ./hello/hello.md --id Hello
```

_See code: [dist/commands/dev/index.ts](https://github.com/dialectik-org/cli/blob/v0.0.2/dist/commands/dev/index.ts)_

## `dialecli help [COMMANDS]`

Display help for dialecli.

```
USAGE
  $ dialecli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dialecli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `dialecli plugins`

List installed plugins.

```
USAGE
  $ dialecli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dialecli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.6/src/commands/plugins/index.ts)_

## `dialecli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialecli plugins:install PLUGIN...

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
  $ dialecli plugins add

EXAMPLES
  $ dialecli plugins:install myplugin 

  $ dialecli plugins:install https://github.com/someuser/someplugin

  $ dialecli plugins:install someuser/someplugin
```

## `dialecli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dialecli plugins:inspect PLUGIN...

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
  $ dialecli plugins:inspect myplugin
```

## `dialecli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ dialecli plugins:install PLUGIN...

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
  $ dialecli plugins add

EXAMPLES
  $ dialecli plugins:install myplugin 

  $ dialecli plugins:install https://github.com/someuser/someplugin

  $ dialecli plugins:install someuser/someplugin
```

## `dialecli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ dialecli plugins:link PLUGIN

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
  $ dialecli plugins:link myplugin
```

## `dialecli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialecli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialecli plugins unlink
  $ dialecli plugins remove
```

## `dialecli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialecli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialecli plugins unlink
  $ dialecli plugins remove
```

## `dialecli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ dialecli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dialecli plugins unlink
  $ dialecli plugins remove
```

## `dialecli plugins update`

Update installed plugins.

```
USAGE
  $ dialecli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
