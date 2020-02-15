const srv=require('express')()
const teacherRoute = require('./route/teacher')
const studentRoute = require('./route/student')

srv.use('/student' , studentRoute)
srv.use('/teacher' , teacherRoute)
srv.listen(2233)
