let arr=[8,6,3,4,2,1,34,28,32,56]
console.log(arr.sort());  // sorting the array is lexiographical . this is the default sorting in js
function compare(a,b){
return a-b;
}
let sortedarr = arr.sort(compare)
console.log(sortedarr);      // this will return correct sorting.