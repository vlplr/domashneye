/* function identityCheck () {
    let threeDigitNumber = prompt("Напиши трёхзначное число")
    if (threeDigitNumber.length === 3 && !isNaN(threeDigitNumber)) {
    if (threeDigitNumber[0] === threeDigitNumber[1] && threeDigitNumber[1] === threeDigitNumber[2]) {
        console.log("Все цифры числа одинаковые")
    } else {
        console.log("Все цифры числа не одинаковые")
    }
    if (threeDigitNumber[0] === threeDigitNumber[1] || threeDigitNumber[1] === threeDigitNumber[2] || threeDigitNumber[0] === threeDigitNumber[2]) {
        console.log("Среди цифр числа есть одинаковые")
    } else {
        console.log("Среди цифр числа нет одинаковых")
    }
    } else {
        console.log("Это не трёхзначное число")
    }
}

identityCheck () */

function identityCheck() {
    const num = prompt("Напиши трёхзначное число");

    if (!num || num.length !== 3 || isNaN(num)) {
        console.log("Это не трёхзначное число");
        return;
    }

    const [a, b, c] = num;

    console.log(a === b && b === c ? "Все цифры числа одинаковые" : "Все цифры числа не одинаковые");
    console.log(a === b || b === c || a === c ? "Среди цифр числа есть одинаковые" : "Среди цифр числа нет одинаковых");
}

identityCheck();
