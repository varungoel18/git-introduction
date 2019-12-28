function Person(name,age) {
    this.firstname = name.split(" ")[0]
    this.lastname = name.split(" ")[1]
    this.age=age;
    this.isadult =  function() { return age>18}
}
let p = new Person("varun goel", 19)
let h = new Person("harry potter",12)
console.log(p);
console.log(p.isadult())
console.log(h.isadult());