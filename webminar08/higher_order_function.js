function creategreeter(name) {
let firstname = name.split(" ")[0]
function greeter() {
    console.log("hello"+ firstname);
}
return greeter;
}
let johngreeter = creategreeter("john doe");
let harrygreeter = creategreeter("harry potter");
johngreeter();
harrygreeter();