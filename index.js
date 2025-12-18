let NULL = null;
let nichego;
let OBJECT = {};
let SYMBOL = Symbol('символ');

const dataTypes = [1, "woqe4r54tuiy", 324567890n, false, NULL, nichego, OBJECT, SYMBOL];

dataTypes.forEach(function (value) {
    if (value === null) {
        console.log("null");
    } else {
    console.log(typeof value);
    }
});
