const express= require('express')
const srv=express();
const todoRoute = require('./routers/todos')  //address of folder is passed
srv.use(express.json)
srv.use(express.urlencoded({extended:true}))
srv.get('hello', function(req,res){
    res.send("hello")
})
srv.use('/public',express.static(__dirname + "/public"))
srv.listen(4568)
