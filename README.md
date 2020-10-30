# ** DO NOT USE THIS CODE IS A DRAFT **

## IO Code Generation utilities

This repository contains the IO code generation utilities that we use to skaffold:

- [Azure HTTP triggered Functions](./azure-functions-http)
- [Azure Durable Functions Activities](./azure-functions-activity)
- ... add your own !

We are using [plop](https://plopjs.com/) to implement our generators.

A generator consist in some template files and an optional transform function.

### How to generate new code

```shell
yarn plop
```

will ask you some question before skaffolding.
