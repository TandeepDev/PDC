const express = require('express');
const app = express();

// Application configurations
// const PORT = process.env.PORT || 3000; 
app.use(express.json());

// Application Routing
app.use('/', require('../router/router'));

app.listen(3000, () => {
  console.log('Sever started at PORT', PORT);
});