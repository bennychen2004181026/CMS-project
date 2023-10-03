require('dotenv').config();
const express = require('express');
const cors = require('cors');
const v1Router = require('./routes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/v1',v1Router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})