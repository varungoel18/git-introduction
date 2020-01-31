function downloadPromise() {
    return new Promise(function (resolve,reject){
        console.log("starting to download the file") // statement will be printed without any delay
        setTimeout( function (){
            console.log("download is complete")
            resolve();
        },3000)  // after three second the statement will be printed
    })
}
let downloadfile = downloadPromise()
setTimeout(function() {
    downloadfile.then(function (){
        console.log("after download") // after one second of above waiting time statement will be printed
    })
},4000)