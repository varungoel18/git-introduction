function fruit(color,taste) {
    this.color = color;
    this.taste = taste;
}
let orange = new fruit("orange","sour");   // use of new keyword.
let apple = new fruit ("red", "sweet");
let mango = {
    color : "yellow",
    taste : "sweet"
}
console.log(orange); // it will contain fruit class
console.log(apple);  // it will contain fruit class
console.log(mango);  // it will not include fruit class