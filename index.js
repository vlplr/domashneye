let NULL = null;
let nichego;
let OBJECT = {};
let SYMBOL = Symbol('символ');

const dataTypes = [1, "woqe4r54tuiy", false, NULL, nichego, OBJECT];

dataTypes.forEach(function (value) {
    if (value === null) {
        console.log("null");
    } else {
    console.log(typeof value);
    }
});
