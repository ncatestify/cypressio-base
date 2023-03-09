# TESTIFY.TEAM template to start Cypress.IO website testing

![TESTIFY-Logo-horizontal](https://user-images.githubusercontent.com/108877931/213471758-3fa5694f-2b6f-4c1d-9161-26b512fe3968.jpg)

[TESTIFY.TEAM](https://testify.team) - WE FIND BUGS. **AUTOMATED**.

Errors are often in the details. Finding bugs manually can be like searching in a digital haystack: You waste time and resources. Automated website testing reduces both. At the same time, it increases the effectiveness and security of your application. TESTIFY is your agency for automated website testing.

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

This template includes pre-made commands you can use in your tests.

### Critical

```bash
cy.ttValidateImprintClickable()
```
Validates website has an imprint and that it's clickable. 
An imprint is mandatory for websites in Germany, Austria and Switzerland.

```bash
cy.ttValidateNoGoogleFonts()
```
Validates no google fonts are being loaded. 
This is important as loading Google Fonts causes a violation against GDPR.

### Monitoring

```bash
cy.ttEveryInternalLinkStatusOk()
```
Sends a request to all internal pages on page and validates they return a status code 200. 
A status code 200 means that the request has succeeded.

```bash
cy.ttEveryInternalLinkIsLoading()
```
Visits all internal pages on page and validates that they're loading.
This confirms that there are no dead links on page.

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
