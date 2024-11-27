const express = require('express');
const bodyParser = require('body-parser');
const addSchool = require('./routes/addSchool');
const listSchools = require('./routes/listSchools');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use('/api', addSchool);
app.use('/api', listSchools);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
