let arr = [1,2,3,4,5,6]
let arr2 = arr.map(function(item){
    return item * item;        // basically making our own function
})
console.log(arr2)
let arr3 = arr.map(Math.sqrt)
console.log(arr3);