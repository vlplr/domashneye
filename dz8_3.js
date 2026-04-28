/* let i = 0;
function enter100() {
    do { let num = +prompt("Введи число больше 100");
    if (Number.isNaN(num)) {
        console.log("Это не число");
    } if (i == 10 || num > 100) {
            console.log(num);
            break;
        }
        i++;
} while (num <= 100);
} 
    

enter100(); */

function enter100() {
    let i = 0;
    let num;
    do {
        num = +prompt("Введи число больше 100");
        if (Number.isNaN(num)) {
            console.log("Это не число");
        }
        i++;
        if (i === 10 || num > 100) {
            break;
        }
    } while (num <= 100);
    console.log(num);
}

enter100();