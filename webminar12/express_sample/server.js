const express= require('express')
const srv=express();
srv.get('hello', function(req,res){
    res.send("hello")
})
srv.use('/public',express.static(__dirname + "/public"))
srv.listen(4567)
