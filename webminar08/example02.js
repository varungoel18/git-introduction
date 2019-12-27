function add(x,y) {
    return x+y;
}
console.log(add(4,5));
let sum = add;
console.log(sum(2,3)) // it will return 5
//console.log(sum);  // it will return [function: add]