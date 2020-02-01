const express = require('express');
const PostRouter = require('./data/cars/cars-router');
const server = express();

server.use(express.json());
server.use('/api/cars', PostRouter);

module.exports = server;