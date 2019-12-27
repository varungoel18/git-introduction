function createcounter(initval,delta) {
let val = initval;
function counter() {
    val = val+ delta;
    return val;
}
return counter;
}
let fivecount = createcounter(5,5) // output is 10 ,15,20
let anothercount = createcounter(18,4); // output is 22,26,30
console.log(fivecount());
console.log(fivecount());
console.log(fivecount());
console.log(anothercount());
console.log(anothercount());
console.log(anothercount());