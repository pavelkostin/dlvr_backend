const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const auth = require('./middlewares/auth');
const { getGoods } = require('./controllers/goods');
const { createUser } = require('./controllers/users');
const { loginUser } = require('./controllers/users');
const { allowedCors } = require('./utils/utils');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes');

const { PORT = 3001 } = process.env;
const app = express();
app.use(cors(allowedCors));
mongoose.connect('mongodb://localhost:27017/dlvr');

app.use(bodyParser.json());
app.use(express.json());
app.use('/goods', getGoods);
app.use('/sign-up', createUser);
app.use('/sign-in', loginUser);
app.use(auth);
app.use(routes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
