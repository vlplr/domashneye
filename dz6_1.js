const userData = {
    name: prompt("Введи своё имя"),
    age: +prompt("Введи свой возраст"),
    address: prompt("Введи свой адрес"),
    showData: function() {
        console.log(`Имя:${this.name} Возраст:${this.age} Адрес:${this.address}`);
    }
};

userData.showData();
