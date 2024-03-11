import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json([
    {id: 1, name: 'Name 1'},
    {id: 2, name: 'Name 2'},
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
