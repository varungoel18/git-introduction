const express = require('express')
const server = express()

server.get('/',function(req,res,next){
  console.log("yo")
  res.send("hello world")   // response which will be send in response to server.listen
})
server.get('/greet/:tod/:name',function (req ,res,next){
  let tod='morning'
  switch(req.params.tod)
  {
    case'evening':tod="Evening";break;
    case 'morning':tod="Morning";break;
  }
  let greeting="good"+tod+","+req.params.name
  res.send(greeting)
})
server.get('/html', function(req,res,next){
  res.send(                  // back tics are used for passing on html command these are availble on the left of 1 button.
    `<html>                   
    <body>
    <i> this is a italic text </i>
    <h1> thsi is a heading </h1>
    </body>
    </html>
    `
  )
})
server.listen(2121)   // it will send the address of the server
// query is used in place of params which is denoted through after'?' sign wheras params give direct answere