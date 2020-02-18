const route=require('express').Router();
let todos=[]
route.get('/',function(req,res){
    res.send(todos)
} )

route.post('/' , function(req,res){
    todos.Push({
        task:req.body.task

    })
    res.send(todos)
    
})
module.exports= route