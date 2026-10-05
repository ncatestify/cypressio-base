# Template for new Cypress repositories

## Initialize a new repo

`npm init with ncatestify/cypressio-base`

Fill name and description.

The name is also the new directory.

The following steps must then be performed.

`cd <new-project>`

`npm install`

`npx cypress open` or `npm run cypress:open`

## Linting

`npm run lint` runs ESLint with the official [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress) plus mocha and chai-friendly rules. Adjust rule severities in `eslint.config.js`.

### Open Source project by TESTIFY.TEAM

[TESTIFY.TEAM](https://testify.team) - WE FIND BUGS. **AUTOMATED**.

[German YouTube Cypress.IO Live Coding Playlist](https://www.youtube.com/watch?v=mb_PTxDeJKI&list=PLKrKzhBjw2Y9ceCxO3ollOc4eIVPAjiHs)

[How to start with this Cypress.IO template on YouTube](https://youtu.be/b27PciNzreY)
