# Boilerplate CLI

In order to create the project quickly, we created a CLI. It uses two repositories underneath:

[Express boilerplate](https://github.com/TheSoftwareHouse/express-boilerplate)

[Serverless boilerplate](https://github.com/TheSoftwareHouse/serverless-boilerplate) - not supported yet

# Commands

```
Usage: boilerplate init

Initialize boilerplate project
```

# How to build the CLI?

To build a CLI run

```
npm run build
```

# How to run it locally?

Before you do it, please be sure that you have build the project. To run CLI locally, in a main directory of this repository use following command 

```
npm i -g .
```

It will install CLI on your machine. Then you will be able to use `boilerplate` command in your terminal.

# How it works?

The repository is divided into two parts, CLI and Engine. 

CLI is responsible for graphically representing the steps needed to initialize our project. It is closely related to the library that allows us to do this. The result of the CLI layer is the configuration that is then passed to the engine.

Based on the configuration the appropriate boilerplate is downloaded. Then it is passed on to the mechanism which will correctly configure our project.

# Engine structure

## Bootstrappers

Each bootstraper is responsible for configuring a project, based on configuration from CLI. Depends on selected modules, we are removing these which are not necessary. For each project, bootstraper is inside `src/engine/runner/bootstrapper` directory.
