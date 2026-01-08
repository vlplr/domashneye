function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}


const array = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

removeElement(array, 5);

console.log(array);