const express=require('express')
const srv = express()
srv.get('/a',(req,res) => res.send("AAAAAA"))
srv.get('/b',(req,res) => res.send("BBBBBBB"))

srv.use((req,res) => res.send("<h1>404 not found</h1>"))
srv.listen(2453)