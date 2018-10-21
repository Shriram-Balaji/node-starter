const express = require('express');
const morgan = require('morgan');
const http = require('http');
const routes = require('./routes/main.routes');
const { error, success, debug } = require('util-box').outputUtil;
const port = process.env.PORT || 9000;

const app = express();
app.use(morgan('combined'));
app.use(routes());

const server = http.createServer(app);
server.listen(port);
server.on('error', (e) => {
	error(e);
});

server.on('listening', () => success(`Listening on port ${port}`));
