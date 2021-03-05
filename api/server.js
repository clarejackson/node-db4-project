const express = require('express');

// const dataAccess = require('./data_access');

const server = express();

server.use(express.json());
// server.use('/api/recipes', dataAccess);

server.get('/', (req, res) => {
  res.status(200).json({api: "Hello World!"});
});

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Oh no, something went wrong!",
	})
})

module.exports = server;