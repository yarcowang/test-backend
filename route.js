const user = require('./controllers/user');

module.exports = (server) => {
    // CRUD
    server.post('/users', user.create);
    server.get('/users/:id', user.get);
    server.put('/users/:id', user.update);
    server.del('/users/:id', user.remove);
}

