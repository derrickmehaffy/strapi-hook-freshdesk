module.exports = (client, debug) => {
  return {
    get: async () => {
      return await client.getSettingsAsync();
    },
  };
};
