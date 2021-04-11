module.exports = (client) => {
  return {
    createReply: async (ticketId, reply) => {
      return await client.createReplyAsync(ticketId, reply);
    },
    createNote: async (ticketId, note) => {
      return await client.createNoteAsync(ticketId, note);
    },
    update: async (id, data) => {
      return await client.updateConversationAsync(id, data);
    },
    delete: async (id) => {
      return await client.deleteConversationAsync(id);
    },
  };
};
