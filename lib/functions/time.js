module.exports = (client) => {
  return {
    create: async (ticketID, data) => {
      return await client.createTimeEntryAsync(ticketID, data);
    },
    find: async (filter) => {
      return await client.listAllTimeEntriesAsync(filter);
    },
    toggle: async (entryID) => {
      return await client.toggleTimerAsync(entryID);
    },
    update: async (id, data) => {
      return await client.updateTimeEntryAsync(id, data);
    },
    delete: async (id) => {
      return await client.deleteTimeEntryAsync(id);
    },
  };
};
