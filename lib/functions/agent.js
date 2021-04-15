module.exports = (client) => {
  return {
    find: async (query, fetchAll = false) => {
      if (fetchAll === true) {
        let data = []
        let loopPage = 1;
        let keepGoing = true;

        while (keepGoing === true) {
          query.page = loopPage
          let response = await client.listAllAgentsAsync(query);

          if (response.length > 0) {
            data.push(...response)
            loopPage++
          } else {
            keepGoing = false
            return data
          }
        }
      } else {
        return await client.listAllAgentsAsync(query);
      };
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
