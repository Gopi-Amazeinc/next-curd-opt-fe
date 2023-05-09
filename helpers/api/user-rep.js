let users = require('data/users.json');

export const usersRep = {
        getAll: () => users,
        find: x => users.find(x)
    };