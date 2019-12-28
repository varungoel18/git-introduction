// prototypes are the way of inhetritance
let p = {
    a:10
}
let q = Object.create(p)  // object.create is used to inherit the previous object.
q.b = 20 
let r = Object.create(q) ; 
r.c = 30;
console.log(p)
console.log(q)
console.log(r)
console.log(r.a)