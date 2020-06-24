const app = require('./index.js');
const port = process.env.PORT;

app.listen(port, ()=>{
  console.log(`Listening at http://127.0.0.1:${port}`)
});