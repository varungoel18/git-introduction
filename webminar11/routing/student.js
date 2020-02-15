const express = require('express').Router()
let student = [
    {name: "pulkit ", subject: "c++",year:"1"},
    { name: "shubham" , subject:"c",year:"2"},
    {name:"manas" , subject:"java",year:"3"}
] 
route.get('/',(req,res) => res.send(student))
route.post('/',(req,res) => {     // it is used for posting a new record .
    name: req.body.name; 
    subject: req.body.subject;
    year: req.body.year
})
res.send(students)
route.get("/:id",(req,res) => res.send(student[req.param.id]))

module.exports=Route