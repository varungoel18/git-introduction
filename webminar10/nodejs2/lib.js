const fs=require('fs')
fs.writefile(_dirname + '/myfile.txt' ,"some data" , function(err) {     // this is used for writting down the fle.
    if(err) throw err
    console.log("file was written");
}
)