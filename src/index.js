const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('acessar o mongo atlas e criar cluster, adicionar um novo usuario e liberar acesso na rede', {
    useNewUrlParser: true,
});

// adding middleware to use the socket.io
app.use((req, res, next) => {
    req.io = io;
    // used to continue the request
    next();
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333);