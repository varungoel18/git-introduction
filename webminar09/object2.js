let obj = {
    anumber: 10,
    astring : "asds",
    afunction:function() {
        console.log(this.anumber+this.astring)  // refer the item whithin object
    }
}
console.log(obj.afunction());