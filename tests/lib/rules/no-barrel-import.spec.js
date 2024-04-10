const { RuleTester } = require('eslint');
const rule = require('../../../lib/rules/no-barrel-import');

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015, sourceType: 'module' } });

ruleTester.run('no-barrel-import rule', rule, {
  valid: [
    {
      code: `import { chuck } from './utils'`,
    },
  ],

  invalid: [
    {
      code: `import * as chuck from '.'`,
      errors: [{ message: `Should not use imports ends with '.' or '..'. Import the specific file instead.` }],
    },
    {
      code: `import * as chuck from '..'`,
      errors: [{ message: `Should not use imports ends with '.' or '..'. Import the specific file instead.` }],
    },
  ],
});
