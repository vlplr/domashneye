let N = +prompt("Введи максимальный квадрат числа");
for (let i = 1; i <= 100; i++) {
    let squaredNumber = i * i;
    
    if (squaredNumber > N) {
        break;
    }
    console.log(squaredNumber);
}
