module.exports = (client) => {
  return {
    find: async () => {
      return await client.listAllRolesAsync();
    },
    findOne: async (id) => {
      return await client.getRoleAsync(id);
    },
  };
};
