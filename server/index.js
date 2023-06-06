require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { router } = require('./router');

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use(express.urlencoded({ extended: true }));

server.use(express.static(path.join(__dirname,'../client/dist')));

server.use('/', router);

server.listen(process.env.PORT, () => {
  console.log(`listening at port ${process.env.PORT}`)
});