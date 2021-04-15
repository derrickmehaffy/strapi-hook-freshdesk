# strapi-hook-freshdesk

<a href="https://www.npmjs.org/package/strapi-hook-freshdesk">
    <img src="https://img.shields.io/npm/v/strapi-hook-freshdesk" alt="NPM Version" />
</a>
<a href="https://www.npmjs.org/package/strapi-hook-freshdesk">
    <img src="https://img.shields.io/npm/dm/strapi-hook-freshdesk.svg" alt="Monthly download on NPM" />
</a>

## This hook is a WIP and is not production ready!

This hook allows you to use [Freshdesk](https://www.freshdesk.com/) as a service in [Strapi](https://github.com/strapi/strapi) `strapi.services.freshdesk`. Freshdesk is a ticket management software for supporting customers and clients, it allows you to create and manage companies, contacts, and tickets as well as having a customer portal where you can write support articles, FAQs, and run a forum for your customers.

This hook is using the `freshdesk-api` package, for additional information please see their package [documentation](https://www.npmjs.com/package/freshdesk-api). This hook does use [bluebird](https://www.npmjs.com/package/bluebird) to switch from callbacks to promise based functions.

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

## Hook config

To activate and configure the hook, you need to create or update the file `./config/hook.js` in your strapi app. For more information please see the [Strapi hooks documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#hooks). For information about environmental configs and alternative config locations, see the [Strapi environment documentation](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#environment).

```js
module.exports = ({ env }) => ({
  settings: {
    // ...
    freshdesk: {
      enabled: true,
      // Doesn't work with custom domains, must be a freshdesk subdomain
      domain: env("FRESHDESK_DOMAIN", "https://example.freshdesk.com"),
      apiKey: env("FRESHDESK_APIKEY", "yourAPIKey"),
    },
  },
});
```
## Usage

**Requirements**

1. Have an existing Freshdesk instance
2. Have an API key (You can fetch yours from your Agent profile)

After you have configured your hook, you can access the hook functions via:

`strapi.services.freshdesk`

For some more advanced usage other than the examples below please see [The Strapi Guru Documentation]().

The recommended way to pull in various functions for usage is with the following example:

```js
const { contact, company, ticket, time } = strapi.services.freshdesk

let companyData = await company.findOne('someCompanyID')
```

### Agents

**Core Route -** `strapi.services.freshdesk.agent`

Agents in Freshdesk can be “full-time” or “occasional”. Full time agents are those in your core support team who will log in to your help desk every day. Occasional agents are those who would only need to log in a few times every month, such as the CEO or field staff.

> :warning: **All Agent APIs require admin privileges on the API Key.**

- `agent.find(query, fetchAll)`
  * query: Required Object => Used to query for specific agents [Read More](https://developer.freshdesk.com/api/#list_all_agents)
  * fetchAll: Optional Boolean => Using paging to fetch all agents
- `agent.findOne(id)`
  * id: Required Integer => Agent's ID
- `agent.update(id, data)`
  * id: Required Integer => Agent's ID
  * data: Required Object => Fields to update on the agent [Read More](https://developer.freshdesk.com/api/#update_agent)
- `agent.delete(id)`
  * id: Required Integer => Agent's ID

### Companies

**Core Route -** `strapi.services.freshdesk.agent`

When multiple contacts from the same company contact you, it is better to group them into a company. This way, the tickets of the contacts can be mapped to the company. This also enables you to find an alternative person to call/email when a contact is unavailable.

- `company.create(data)`
- `company.find(page)`
- `company.findOne(id)`
- `company.update(id, data)`
- `company.delete(id)`
- `company.search(name)`
- `company.filter(query)`
- `company.findFields()`

### Contacts

**Core Route -** `strapi.services.freshdesk.contact`

A contact is a customer or a potential customer who has raised a support ticket through any channel.

- `contact.create(data)`
- `contact.find(filter)`
- `contact.findOne(id)`
- `contact.update(id, data)`
- `contact.delete(id)`
- `contact.search(query)`
- `contact.findFields()`
- `contact.makeAgent(id)`

### Conversations

**Core Route -** `strapi.services.freshdesk.conversation`

Conversations consist of replies as well as public and private notes added to a ticket. Notes are non-invasive ways of sharing updates about a ticket amongst agents and customers. Private notes are for collaboration between agents and are not visible to the customer. Public notes are visible to, and can be created by, both customers and agents.

- `conversation.createReply(ticketId, reply)`
- `conversation.createNote(ticketId, note)`
- `conversation.update(id, data)`
- `conversation.delete(id)`
### Roles

**Core Route -** `strapi.services.freshdesk.role`

Roles allow you to create special privileges and profiles specifying what an agent can see and do within your Freshdesk support portal. These roles help you classify your team into different sections and assign them capabilities so that they get to do what they need to on their helpdesk, without getting in each other's way. They are especially useful for larger teams where there are different groups of employees trying to handle different things.

> :warning: **All Role APIs require admin privileges on the API Key.**

- `role.find()`
- `role.findOne(id)`

### Settings

**Core Route -** `strapi.services.freshdesk.settings`

Settings are configured through the Admin page of the Freshdesk web app.

- `settings.get()`

### Tickets

**Core Route -** `strapi.services.freshdesk.ticket`

A ticket is an issue raised by a requester that need to be solved. It could be an urgent, high-priority problem exposing a security vulnerability. It could also be low priority question about a free T-shirt. Tickets are assigned to agents based on the agent's expertise and on the subject of the ticket.

- `ticket.create(data)`
- `ticket.find(filter)`
- `ticket.findOne(id)`
- `ticket.update(id, data)`
- `ticket.delete(id)`
- `ticket.restore(id)`
- `ticket.search(query, page, fetchAll)`
- `ticket.findFields()`
- `ticket.findConversation(id)`
- `ticket.findTime(id)`

### Time

**Core Route -** `strapi.services.freshdesk.time`

The time tracking feature in Freshdesk lets you track the time spent by each agent on resolving tickets and thereby enables you to gain visibility on the helpdesk's overall performance. Freshdesk lets agents track the time they spend on a ticket with automatic start and stop timers. Agents can also manually log the time they have spent, and detail their activities during this period by adding comments to the time entries.

- `time.create(ticketID, data)`
- `time.find(filter)`
- `time.toggle(entryID)`
- `time.update(id, data)`
- `time.delete(id)`

### Other (Client)

The client API is used to bypass this hook's custom logic and use the [freshdesk-api](https://www.npmjs.com/package/freshdesk-api) API functions.

Since the current `freshdesk-api` documentation does not cover it, if you wish to use promise based functions you just need to add `Async` to the end of the function name.

**Callback Based:** `strapi.services.freshdesk.client.getTicket(id, callback)`

**Promise Based:** `strapi.services.freshdesk.client.getTicketAsync(id, callback)`

At the time of writing, we have currently implemented all of the functions available in `freshdesk-api`.

### Support

- [Strapi community on Slack](https://slack.strapi.io) for general chatting or questions
- [GitHub issues](https://github.com/derrickmehaffy/strapi-hook-freshdesk/issues) for Bugs and Feature requests

### Resources

- [Strapi website](http://strapi.io/)
- [Strapi forum](https://forum.strapi.io/)
- [Strapi news on Twitter](https://twitter.com/strapijs)

### License

- Copyright (c) 2020-2021 Derrick Mehaffy & Strapi Solutions ([GPLv3 License](LICENSE)).
