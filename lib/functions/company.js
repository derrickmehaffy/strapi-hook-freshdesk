module.exports = (client, debug) => {
  return {
    create: async (data) => {
      return await client.createCompany(data);
    },
    find: async (page = 1) => {
      // Pending upstream PR: https://github.com/arjunkomath/node-freshdesk-api/pull/149
      // return await client.listAllCompaniesAsync(page);
      return await client.listAllCompaniesAsync();
    },
    findOne: async (id) => {
      return await client.getCompany(id);
    },
    update: async (id, data) => {
      return await client.updateCompany(id, data);
    },
    delete: async (id) => {
      return await client.deleteCompany(id)
    },
    // Pending upstream PR: https://github.com/arjunkomath/node-freshdesk-api/pull/149
    // search: async (name) => {
    //   return await client.searchCompaniesAsync(name);
    // },
    filter: async (query) => {
      return await client.filterCompaniesAsync(query);
    },
    findFields: async () => {
      return await client.listAllCompanyFieldsAsync();
    },
  };
};
