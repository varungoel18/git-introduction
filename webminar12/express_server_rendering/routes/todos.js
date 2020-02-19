const route = require('express').Router()
let todos =[
    {task:"this ia a task"},
    {task:"this is another task"}
]

route.get('/',function(req,res){
    res.render('todos',{todos})
})
route.post('/',function(req,res){

})
module.exports=route