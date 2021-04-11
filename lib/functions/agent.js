module.exports = (client) => {
  return {
    find: async (query) => {
      return await client.listAllAgentsAsync(query);
    },
    findOne: async (id) => {
      return await client.getAgentAsync(id);
    },
    update: async (id, data) => {
      return await client.updateAgentAsync(id, data);
    },
    delete: async (id) => {
      return await client.deleteAgentAsync(id);
    },
  };
};
