function deleteSymbols (String, deletedSymbols) {
    let lowerCasedDeletedSymbols = deletedSymbols.join("").toLowerCase().split("");
    let arr = String.toLowerCase().split("");
    let result = arr.filter(el => !lowerCasedDeletedSymbols.includes(el));
    console.log(result.join(""));
}

deleteSymbols("Hello World",  ['H', 'w']);