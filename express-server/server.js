import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// needed toj add these things for dirname to work properly with js modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// middleware
// does stuff inbetween requests
// app.use((req, res, next) => {
  // console.log("hello")

  // lets the request continue
  // next()
// })

// app.use(express.urlencoded({extended:false}));
// app.use(express.json())

app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
  // req.query
  // what we get when we use a get query
  // console.log(req.query)

  // req.body
  // what the request sends in its body

  // req.header
  // gets some of the meta data and extra information that the request sends
  // console.log(req.header) recieves a function

  // req.params
  // a syntax of the parameters of the url
  // console.log(req.params)

  // res.status
  // adds a status to the response

//   res.send()
// });

// app.get('/profile', (req, res) => {
//   const user = {
//     name: 'riley',
//     hobby: 'photography'
//   }

//   res.send(user)
// });

// app.post('/profile', (req, res) => {
//   console.log(req.body)

//   res.send('success')
// })

app.listen(3000);