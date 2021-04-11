module.exports = (client) => {
  return {
    create: async (data) => {
      return await client.createContactAsync(data);
    },
    find: async (filter) => {
      return await client.listAllContactsAsync(filter);
    },
    findOne: async (id) => {
      return await client.getContactAsync(id);
    },
    update: async (id, data) => {
      return await client.updateContactAsync(id, data);
    },
    delete: async (id) => {
      return await client.deleteContactAsync(id);
    },
    search: async (query) => {
      return await client.filterContactsAsync(query);
    },
    findFields: async () => {
      return await client.listAllContactFieldsAsync();
    },
    makeAgent: async (id) => {
      return await client.makeAgentAsync(id);
    },
  };
};
