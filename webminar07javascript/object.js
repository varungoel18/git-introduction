let obj = {
    a: 10  ,
    b: "hello" ,  
    c: true ,
    d: {
        p :10,
        q : 20 ,
        r: {
            x: "value"
        }
    }


}
console.log(obj.d.r.x)
obj.l=11111; // new property added
delete obj.b // used to delete object