console.log(this)
function fun() {
    console.log(global == this)
}
fun();   // this refer to global
new fun();  // here this does not refer to glaobal it refers to something else