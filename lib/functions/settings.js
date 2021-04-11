module.exports = (client) => {
  return {
    get: async () => {
      return await client.getSettingsAsync();
    },
  };
};
