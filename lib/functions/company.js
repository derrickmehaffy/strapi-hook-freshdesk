module.exports = (client) => {
  return {
    create: async (data) => {
      return await client.createCompany(data);
    },
    find: async (fetchAll = false, page = 1 ) => {
      if (fetchAll === true) {
        let data = [];
        let loopPage = 1;
        let keepGoing = true;

        while (keepGoing === true) {
          let response = await client.listAllCompaniesAsync({page: loopPage});

          if (response.length > 0) {
            data.push(...response)
            loopPage++
          } else {
            keepGoing = false
            return data
          }
        }
      } else {
        return await client.listAllCompaniesAsync({page});
      }
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
    search: async (name) => {
      return await client.searchCompaniesAsync({name});
    },
    filter: async (query) => {
      return await client.filterCompaniesAsync(query);
    },
    findFields: async () => {
      return await client.listAllCompanyFieldsAsync();
    },
  };
};