const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const cors = require('cors')
const port = 4000

const indexRouter = require('./routes/index');
const messagesRouter = require('./routes/messages')

const app = express();
app.options('*', cors())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/messages', messagesRouter)
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))
module.exports = app;
