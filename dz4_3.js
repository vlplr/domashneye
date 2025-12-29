/* function userData() {
let userBirthYear = +prompt("В каком году ты родился?") 
let userCity = prompt("В каком городе ты живёшь?")
let userFavouriteSport = prompt("Какой твой любимый спорт?")
if (userCity === "Киев" && userFavouriteSport !== "Шахматы" && userFavouriteSport !== "Шахи" && userFavouriteSport !== "Футбол" && userFavouriteSport !== "Баскетбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Украины`)
} else if (userCity === "Киев" && userFavouriteSport === "Шахматы" || userFavouriteSport === "Шахи") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Украины\nКруто!Хочешь стать Магнусом Карлсеном?`)
} else if (userCity === "Киев" && userFavouriteSport === "Футбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Украины\nКруто!Хочешь стать Криштиану Роналду?`)
} else if (userCity === "Киев" && userFavouriteSport === "Баскетбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Украины\nКруто!Хочешь стать Майклом Джорданом?`)
} else if (userCity === "Вашингтон" && userFavouriteSport !== "Шахматы" && userFavouriteSport !== "Шахи" && userFavouriteSport !== "Футбол" && userFavouriteSport !== "Баскетбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице США`)
} else if (userCity === "Вашингтон" && userFavouriteSport === "Шахматы" || userFavouriteSport === "Шахи") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице США\nКруто!Хочешь стать Магнусом Карлсеном?`)
} else if (userCity === "Вашингтон" && userFavouriteSport === "Футбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице США\nКруто!Хочешь стать Криштиану Роналду?`)
} else if (userCity === "Вашингтон" && userFavouriteSport === "Баскетбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице США\nКруто!Хочешь стать Майклом Джорданом?`)
} else if (userCity === "Лондон" && userFavouriteSport !== "Шахматы" && userFavouriteSport !== "Шахи" && userFavouriteSport !== "Футбол" && userFavouriteSport !== "Баскетбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Великобритании`)
} else if (userCity === "Лондон" && userFavouriteSport === "Шахматы" || userFavouriteSport === "Шахи") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Великобритании\nКруто!Хочешь стать Магнусом Карлсеном?`)
} else if (userCity === "Лондон" && userFavouriteSport === "Футбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Великобритании\nКруто!Хочешь стать Криштиану Роналду?`)
} else if (userCity === "Лондон" && userFavouriteSport === "Баскетбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в столице Великобритании\nКруто!Хочешь стать Майклом Джорданом?`)
} else if (userCity !== "Киев" && userCity !== "Київ" && userCity !== "Вашингтон" && userCity !== "Лондон" && userFavouriteSport === "Шахматы" && userFavouriteSport === "Шахи"){
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в городе ${userCity}\nКруто!Хочешь стать Магнусом Карлсеном?`)
} else if (userCity !== "Киев" && userCity !== "Київ" && userCity !== "Вашингтон" && userCity !== "Лондон" && userFavouriteSport === "Футбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в городе ${userCity}\nКруто!Хочешь стать Криштиану Роналду?`)
} else if (userCity !== "Киев" && userCity !== "Київ" && userCity !== "Вашингтон" && userCity !== "Лондон" && userFavouriteSport === "Баскетбол") {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в городе ${userCity}\nКруто!Хочешь стать Майклом Джорданом?`)
} else {
    alert(`Твой возраст: ${2025 - userBirthYear}\nТы живешь в городе ${userCity}`)
}
}

userData() */

function userData() {
    let birthYear = prompt("В каком году ты родился?");
    let city = prompt("В каком городе ты живёшь?");
    let sport = prompt("Какой твой любимый спорт?");

    let message = "";

    // Возраст
    if (birthYear === null) {
        message += "Жаль, что Вы не захотели ввести свою дату рождения\n";
    } else {
        let age = new Date().getFullYear() - birthYear;
        message += `Твой возраст: ${age}\n`;
    }

    // Город
    let capital = "";
    if (city === null) {
        message += "Жаль, что Вы не захотели ввести свой город\n";
    } else {
        if (city === "Киев" || city === "Київ") {
            capital = "столице Украины";
        } else if (city === "Вашингтон") {
            capital = "столице США";
        } else if (city === "Лондон") {
            capital = "столице Великобритании";
        }

        if (capital) {
            message += `Ты живешь в ${capital}\n`;
        } else {
            message += `Ты живешь в городе ${city}\n`;
        }
    }

    // Спорт
    if (sport === null) {
        message += "Жаль, что Вы не захотели ввести свой вид спорта";
    } else {
        if (sport === "Шахматы" || sport === "Шахи") {
            message += "Круто! Хочешь стать Магнусом Карлсеном?";
        } else if (sport === "Футбол") {
            message += "Круто! Хочешь стать Криштиану Роналду?";
        } else if (sport === "Баскетбол") {
            message += "Круто! Хочешь стать Майклом Джорданом?";
        } else {
            message += `Твой любимый спорт — ${sport}`;
        }
    }

    alert(message);
}

userData();