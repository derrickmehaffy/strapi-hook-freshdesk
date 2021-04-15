module.exports = (client) => {
  return {
    create: async (data) => {
      return await client.createTicketAsync(data);
    },
    find: async (filter) => {
      return await client.listAllTicketsAsync(filter)
    },
    findOne: async (id) => {
      return await client.getTicketAsync(id);
    },
    update: async (id, data) => {
      return await client.updateTicketAsync(id, data);
    },
    delete: async (id) => {
      return await client.deleteTicketAsync(id);
    },
    restore: async (id) => {
      return await client.restoreTicketAsync(id);
    },
    search: async (query, page = 1, fetchAll = false) => {
      if (fetchAll === true) {
        let data = {
          total: 0,
          results: []
        };
        let loopPage = 1;
        let keepGoing = true;

        while (loopPage <= 300 && keepGoing === true) {
          let response = await client.filterTicketsAsync(query, page = loopPage);

          if (response.results && response.results.length > 0) {
            data.total = response.total
            data.results.push(...response.results)
            loopPage++
          } else {
            keepGoing = false
            return data
          }
        }
      } else {
        return await client.filterTicketsAsync(query, page);
      }
    },
    findFields: async () => {
      return await client.listAllTicketFieldsAsync();
    },
    findConversation: async (id) => {
      return await client.listAllConversationsAsync(id)
    },
    findTime: async (id) => {
      return await client.listAllTicketTimeEntriesAsync(id)
    },
  };
};
