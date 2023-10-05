require('dotenv').config();
const express = require('express');
const cors = require('cors');
// the express-async-errors works with morgan package to indicate the errors are from which endpoint
require('express-async-errors');
const v1Router = require('./routes');
const connectToDB = require('./utils/db');
const unknownError = require('./middleware/error/unknownError');
const validationError = require('./middleware/error/validationError');
const notFoundError = require('./middleware/error/notFoundError');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/v1', v1Router)
// the order sequence of the middlewares matters
app.use(validationError);
app.use(notFoundError);
app.use(unknownError);

connectToDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})

