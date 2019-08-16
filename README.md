# 0x-test-project

This project should illustrate an issue detected while building TypeScript projects
that depends on `0x.js@6.0.9`.

## Steps to recreate

1. Clone
1. Install deps (`yarn`)
1. Run build script (`yarn build`)

## The error

```
$ tsc
node_modules/@0x/subproviders/lib/src/subproviders/ganache.d.ts:15:31 - error TS2694: Namespace '"ganache-core"' has no exported member 'GanacheOpts'.

15     constructor(opts: Ganache.GanacheOpts);
                                 ~~~~~~~~~~~

node_modules/ganache-core/typings/index.d.ts:2:44 - error TS2307: Cannot find module 'web3/providers'.

2   import { Provider as Web3Provider } from "web3/providers";
                                             ~~~~~~~~~~~~~~~~


Found 2 errors.
```
