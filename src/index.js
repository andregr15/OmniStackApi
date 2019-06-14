const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('acessar o mongo atlas e criar cluster, adicionar um novo usuario e liberar acesso na rede - instalar o mongoose tbm', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);