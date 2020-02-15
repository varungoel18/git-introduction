const express=require('express')
const server = express();
const m1= function(req,res,next) {
    console.log("we are at middlweware1")
    next()
}
const m2= function(req,res,next) {
    console.log("we are at middlweware2")
    next()
}
const m3= function(req,res,next) {
    console.log("we are at middlweware3")
    next()
}
server.use(m1) //it will work
server.use(m2)  //it will work
server.get('/',function(req,res,next){
    console.log("hello world")
})
server.use(m3)     // it will not work
server.listen(3232)