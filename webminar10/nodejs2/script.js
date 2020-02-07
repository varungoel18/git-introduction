const fs=require('fs')
fs.readfile(_dirname + '/myfile.txt' , function(err,data) {     // this is used for reading down the fle.
    if(err) throw err
    console.log(data.tostring());   // tostring is used to display data in the form of string otherwise it comes in some buffer word form
}
)