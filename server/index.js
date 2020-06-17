const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express()
const port = 8000;

app.use(morgan('tiny'));
app.set('query parser', 'simple');

app.get('/', (req, res) => {
  console.log('query params', req.query)
  res.send('Hello World');
})

app.listen(port, ()=>{
  console.log(`Listening at http://127.0.0.1:${port}`)
})