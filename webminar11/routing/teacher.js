const express = require('express').Router()
let teacher = [
    {name: "varun ", subject: "web d"},
    { name: "varun goel" , subject:"data science"}
] 
route.get('/',(req,res) => res.send(teacher))
route.get("/:id",(req,res) => res.send(teacher[req.param.id]))

module.exports=Route
