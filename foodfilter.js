let menu = [
    "paneer tikka",
    "onion rings",
    "chicken tandoor",
    "egg curry",
    "garlic naan"
]
function isveg (food) {
    if(food.tolowercase().indexof("chicken") !== -1) return false;
    if(food.tolowercase().indexof("egg") !== -1) return false;
    return true;
}
function oniongarlicfree (food) {
    if(food.tolowercase().indexof("onion") !== -1) return false;
    if(food.tolowercase().indexof("garlic") !== -1) return false;
    return true;
}
let vegmenu = menu.filter(isveg)
let jainmenu = menu.filter(isveg).filter(oniongarlicfree)
console.log(vegmenu);
console.log(jainmenu);