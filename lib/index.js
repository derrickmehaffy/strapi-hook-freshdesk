"use strict";

/**
 * Freshdesk Hook
 */
const Freshdesk = require("freshdesk-api");
const Promise = require("bluebird");

/**
 * Functions
 */
const agent = require("./functions/agent");
const company = require("./functions/company");
const contact = require("./functions/contact");
const conversation = require("./functions/conversation");
const role = require("./functions/role");
const settings = require("./functions/settings");
const ticket = require("./functions/ticket");
const time = require("./functions/time");

module.exports = (strapi) => {
  return {
    /**
     * Default options
     * This object is merged to strapi.config.hook.settings.freshdesk
     */
    defaults: {
      domain: "",
      apiKey: "",
      debug: false,
    },

    /**
     * Initialize the hook
     */
    async initialize() {
      // Merging defaults and config/hook.json
      const { domain, apiKey, debug } = {
        ...this.defaults,
        ...strapi.config.hook.settings.freshdesk,
      };

      if (!domain || !apiKey) {
        throw Error(
          "The Freshdesk API requires you to supply your domain and a valid API Key, one or more of these is missing."
        );
      }

      const client = Promise.promisifyAll(new Freshdesk(domain, apiKey));

      strapi.services.freshdesk = {
        client,
        agent: agent(client, debug),
        company: company(client, debug),
        contact: contact(client, debug),
        conversation: conversation(client, debug),
        role: role(client, debug),
        settings: settings(client, debug),
        ticket: ticket(client, debug),
        time: time(client, debug),
      };
    },
  };
};
