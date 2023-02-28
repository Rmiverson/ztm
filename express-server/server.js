import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("getting root")
});

app.get('/profile', (req, res) => {
  const user = {
    name: 'riley',
    hobby: 'photography'
  }

  res.send(user)
});

app.post('/profile', (req, res) => {
  const user = {
    name: 'riley',
    hobby: 'photography'
  }

  res.send(user)
})

app.listen(3000);