function Someasynctask (callback) {
    console.log("beginning of the task")  //this line will be printed in fiest place without any waiting time.
    setTimeout(function () {
        console.log("end of the task")  // after 3 seconds this line will be printed
        callback();

    },3000)               // the line will be printed after 3 seconds
}
Someasynctask (function () {
    console.log("we did some task");
})
let sometaskPromise = function() {
    return new Promise(function(resolve,reject){
        Someasynctask(resolve)
    })
}
sometaskpromise() 
.then(function() {
    console.log("after the task is complete")  // after the line we did some task this line will be printed without any waiting time
})