import express from 'express';

const app = express();

// middleware
// does stuff inbetween requests
app.use((req, res, next) => {
  console.log("hello")

  // lets the request continue
  next()
})

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