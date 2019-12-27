function createcounter(initval,delta) {
    let val = initval;
    let counter = {
        incr: function() {
            val+=delta;
        },
        decr: function() {
            val-= delta;
        },
        show : function() {
            console.log(val);        
    } 
}
return counter
}
let a = createcounter(50,5)
a.show(); // 50
a.incr();
a.incr();
a.show(); // 60
console.log(typeof a);   // function
console.log(typeof a.show); // 60
console.log(typeof a.show()); // undefined