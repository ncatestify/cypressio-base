# Template for new Cypress repositories

## Initialize a new repo
`npm init with ncatestify/cypressio-base`

Fill name and description.

The name is also the new directory.

The following steps must then be performed.

`cd <new-project>`

`npm install`

`change baseUrl in cypress.config.ts to your new testing site`

`npx cypress open` or `npm run cypress:open`
