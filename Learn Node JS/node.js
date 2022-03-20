function sophea() {
    return "This is Sophea in Node Js File";
}
var age = 23;

// module.exports = sophea;

// if we want to using multi
module.exports = {
    sp : sophea ,
    age : age
};