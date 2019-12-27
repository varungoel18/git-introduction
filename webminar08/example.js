function greeter () {
    console.log("hello");
}
greeter();
let hellosayer = greeter;
console.log(hellosayer == greeter)  //checks wheather hellosayer equal to greeter true or not 
hellosayer();