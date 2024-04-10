# eslint-plugin-no-barrel-import

Forbid importing from barrel index.ts files.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-barrel-import`:

```sh
npm install eslint-plugin-no-barrel-import --save-dev
```

## Usage

Add `no-barrel-import` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-barrel-import"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-barrel-import/rule-name": 2
    }
}
```
