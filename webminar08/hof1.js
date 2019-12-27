function getfirstname(fullname) {
    return fullname.split(" ")[0]
}
function greeter(findname, fullname) {
    let firstname = findname(fullname);
    console.log("hello"+ firstname);
}
greeter(getfirstname ,"varungoel");