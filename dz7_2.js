let nothing;
let multiTypeArray = ["string", 235, {}, true, nothing, null, Symbol("symbol"), 4586];
function arithmeticMean () {
    const numbers = multiTypeArray.filter(function (el) {
        return Number.isFinite(el);
    });
    const sum = numbers.reduce((acc, currentValue) => {
        return acc + currentValue;
    }, 0);
    
    return numbers.length ? sum / numbers.length : "В массиве нет чисел";
}

console.log(arithmeticMean());