const express = require('express');
const cors = require('cors');
require('./config/connect');

const articleApi = require('./routes/article.route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/article', articleApi);

app.listen(3000, ()=>{
    console.log('server work');
})