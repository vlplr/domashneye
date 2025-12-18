function breakDown() {
    let fiveDigitNumber = prompt (`Напиши пятизначное число`)
    if (fiveDigitNumber.length === 5 && !isNaN(fiveDigitNumber)) {
        console.log(`${fiveDigitNumber[0]} ${fiveDigitNumber[1]} ${fiveDigitNumber[2]} ${fiveDigitNumber[3]} ${fiveDigitNumber[4]}`);
    } else {console.log("Это не пятизначное число")}
}

breakDown()