const express = require('express');

const app = express();

app.use(express.json());

const createUser = require('./src/routes/user');
const login = require('./src/routes/login');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', createUser);
app.use('/login', login);

app.listen(3000, () => console.log('ouvindo porta 3000!'));