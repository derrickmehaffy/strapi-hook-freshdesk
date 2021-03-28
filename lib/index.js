"use strict";

/**
 * Freshdesk Hook
 */
const Freshdesk = require("freshdesk-api");

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

      const client = Freshdesk(domain, apiKey);

      strapi.services.freshdesk = {
        client,
        ...agent,
        ...company,
        ...contact,
        ...conversation,
        ...role,
        ...settings,
        ...ticket,
        ...time,
      };
    },
  };
};
