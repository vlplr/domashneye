let N = +prompt("Введи максимальный квадрат числа");
for (let i = 1; i <= 100; i++) {
    let squaredNumber = i * i;
    console.log(squaredNumber);
    if (squaredNumber > N) {
        break;
    }
}