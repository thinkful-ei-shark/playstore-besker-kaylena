/* eslint-disable strict */
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.get('./apps', (req, res)=>{
  console.log(res.send('works'));
});

app.listen(8000, ()=>{
  console.log('server is on');
});


