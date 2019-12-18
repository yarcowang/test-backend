const restify = require('restify'),
    plugins = require('restify').plugins
;
const mongoose = require('mongoose');

// dotenv support
require('dotenv').config();
mongoose.connect(process.env.MONGODB_DSN, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const server = restify.createServer();
server.use(plugins.jsonBodyParser({ mapParams: true }));
require('./route')(server);

server.listen(process.env.PORT || 8080, process.env.HOST || '127.0.0.1', () => {
    console.log('%s listening at %s', server.name, server.url);
});
