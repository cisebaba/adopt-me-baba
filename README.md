## Intro

`nvm` allows you to quickly install and use different versions of node via the command line.

**Example:**

```sh
$ nvm use 16
Now using node v16.9.1 (npm v7.21.1)
$ node -v
v16.9.1
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6
```

Simple as that!

## Usage

To download, compile, and install the latest release of node, do this:

```sh
nvm install node # "node" is an alias for the latest version
```

To install a specific version of node:

```sh
nvm install 14.7.0 # or 16.3.0, 12.22.1, etc
```

The first version installed becomes the default. New shells will start with the default version of node (e.g., `nvm alias default`).

You can list available versions using `ls-remote`:

```sh
nvm ls-remote
```

And then in any new shell just use the installed version:

```sh
nvm use node
```

Or you can just run it:

```sh
nvm run node --version
```

Or, you can run any arbitrary command in a subshell with the desired version of node:

```sh
nvm exec 4.2 node --version
```
