# TESTIFY.TEAM template to start Cypress.IO website testing

![TESTIFY-Logo-horizontal](https://user-images.githubusercontent.com/108877931/213471758-3fa5694f-2b6f-4c1d-9161-26b512fe3968.jpg)

[TESTIFY.TEAM](https://testify.team) - WE FIND BUGS. **AUTOMATED**.

Errors are often in the details. Finding bugs manually can be like searching in a digital haystack: You waste time and resources. Automated website testing reduces both. At the same time, it increases the effectiveness and security of your application. TESTIFY is your agency for automated website testing.

## Prerequisites

- Node.js 18.x or higher (20.x or 22.x recommended)
- npm 6.x or higher

## Installation

Initialize a new repo

```bash
$ npm init with ncatestify/cypressio-base
```

Fill name and description.

The name is also the new directory.

The following steps must then be performed.

```bash
$ cd <new-project>
$ npm install
$ npx cypress open
```

## Setup

Update baseUrl in cypress.config.ts

```bash
baseUrl: 'https://testify.team'
```

## Running

```bash
$ npx cypress run
```

Or if you want to use the Gui

```bash
$ npx cypress open
```

## Commands

This template includes pre-made commands from the [cypress-ncatestify-plugin](https://github.com/ncatestify/cypress-base-plugin) that you can use in your tests.

### Example Commands

- `cy.ttAccessibility()` - Check accessibility
- `cy.ttValidateMetaTags()` - Validate meta tags
- `cy.ttDetectHttp()` - Find insecure HTTP links
- `cy.ttInvalidPath404()` - Check for 404 errors
- `cy.ttPageSpeed()` - Measure page performance

### Full Command List

[View all commands in the NCAtestify Plugin Documentation](https://github.com/ncatestify/cypress-base-plugin)

## Linting

This template ships with a preconfigured ESLint setup based on the official [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress). The flat config lives in `eslint.config.js`.

Run the linter with:

```bash
$ npm run lint
```

The setup includes:

- `eslint-plugin-cypress` recommended rules - catches Cypress anti-patterns like assigning command return values (`const btn = cy.get('button')`) or unsafe command chaining
- `eslint-plugin-mocha` - fails the build when a `.only` or `.skip` is committed by accident
- `eslint-plugin-chai-friendly` - allows chai assertion expressions like `expect(value).to.be.true`
- `eslint-plugin-jsonc` - lints JSON files

Rule severities can be adjusted in `eslint.config.js`:

```js
{
  rules: {
    'cypress/no-unnecessary-waiting': 'off'
  }
}
```

## Documentation in Cypress.IO YouTube tutorial

[CYPRESS.IO YouTube tutorial playlist](https://studio.youtube.com/channel/UCjVT6iJ_wg7OM0DkV5TpNCQ/playlists)

### Never Code Alone

We believe in open source and software craftsmanship. All our work, trainings and settings are public. We want to build better working conditions for developer and help out of legacy hells.

This is important for our mental health. **AUTOMATE ALL THE THINGS** is the first step to escape to a mindful live.

## Follow us on

[YouTube](https://www.youtube.com/channel/UCidbyfn89Z405a4YC9F_gmA)
[Twitter](https://twitter.com/NCATestify)
[Instagram](https://www.instagram.com/nca_testify/)

https://testify.team/en
