const mockData = {
  id: '1',
  name: 'John',
  role: 'admin',
};

export default {
  create: async (body) => {
    // TODO: Create User with ORM library
    return { id: '', ...body };
  },

  findAll: async () => {
    // TODO: FindAll User with ORM library
    return [ mockData ];
  },

  findById: async (id) => {
    // TODO: Setup findById with ORM library
    return mockData;
  },

  update: async (id, body) => {
    // TODO: Update User with ORM library
    return { id, ...body };
  },

  delete: async (id) => {
    // TODO: Delete User with ORM library
    return null;
  },
};
