import http from "http"

const server = http.createServer((request, response) => {
  console.log(request.headers)
  console.log(request.method)
  console.log(request.url)

  response.setHeader('Content-Type', 'application/json');
  
  const user = {
    name: 'riley',
    hobby: 'photography'
  }
  
  response.end(JSON.stringify(user))
})

server.listen(3000);