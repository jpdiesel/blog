const express = require('express');

const app = express();

app.use(express.json());

const user = require('./src/routes/user');
const login = require('./src/routes/login');
const categories = require('./src/routes/categories');

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', user);
app.use('/login', login);
app.use('/categories', categories);

app.listen(3000, () => console.log('ouvindo porta 3000!'));