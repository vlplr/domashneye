/* let integer = +prompt("Напиши целое число");
for (i = 2; i < integer; i++) {
    let n = integer % i;
    if (n !== 0) {
        continue;
    } else if (n === 0) {
        console.log("Это не простое число");
        break;
    }
} */

let integer = +prompt("Напиши целое число");

if (integer < 2) {
    console.log("Это не простое число");
} else {
    let isPrime = true;

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            isPrime = false; 
            break;
        }
    }

    if (isPrime) {
        console.log("Это простое число");
    } else {
        console.log("Это не простое число");
    }
}