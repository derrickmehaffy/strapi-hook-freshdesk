# strapi-hook-freshdesk

<a href="https://www.npmjs.org/package/strapi-hook-freshdesk">
    <img src="https://img.shields.io/npm/v/strapi-hook-freshdesk" alt="NPM Version" />
</a>
<a href="https://www.npmjs.org/package/strapi-hook-freshdesk">
    <img src="https://img.shields.io/npm/dm/strapi-hook-freshdesk.svg" alt="Monthly download on NPM" />
</a>

## This hook is a WIP and is not production ready!

This hook allows you to use [Freshdesk](https://www.freshdesk.com/) as a service in [Strapi](https://github.com/strapi/strapi) `strapi.services.freshdesk`. Freshdesk is a ticket management software for supporting customers and clients, it allows you to create and manage companies, contacts, and tickets as well as having a customer portal where you can write support articles, FAQs, and run a forum for your customers.

**Supported Strapi versions:**

- v3.5.x (recommended)
- v3.x

_Older version may work with the beta version of this hook, but are not supported._

## Installation

```bash
# using yarn
yarn add strapi-hook-freshdesk

# using npm
npm install strapi-hook-freshdesk --save
```

## Usage

**WIP**

## Hook config

To activate and configure the hook, you need to create or update the file `./config/hook.js` in your strapi app.

```js
module.exports = {
  settings: {
    // ...
    freshdesk: {
      enabled: true,
    },
  },
};
```

### Support

- [Strapi community on Slack](https://slack.strapi.io) for general chatting or questions
- [GitHub issues](https://github.com/derrickmehaffy/strapi-hook-freshdesk/issues) for Bugs and Feature requests

### Resources

- [Strapi website](http://strapi.io/)
- [Strapi forum](https://forum.strapi.io/)
- [Strapi news on Twitter](https://twitter.com/strapijs)

### License

- Copyright (c) 2020-2021 Derrick Mehaffy & Strapi Solutions ([GPLv3 License](LICENSE.md)).
