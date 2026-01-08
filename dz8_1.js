const sum = (function () {
    let total = 0; // зберігається між викликами

    return function (value) {
        total += value;
        return total;
    };
})();

sum(4);

sum(60);

console.log(sum(7));