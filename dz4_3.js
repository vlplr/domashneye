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
    let userBirthYear = +prompt("В каком году ты родился?");
    let userCity = prompt("В каком городе ты живёшь?");
    let userFavouriteSport = prompt("Какой твой любимый спорт?");

    let age = new Date().getFullYear() - userBirthYear;

    let isChess =
        userFavouriteSport === "Шахматы" ||
        userFavouriteSport === "Шахи";

    let isFootball = userFavouriteSport === "Футбол";
    let isBasketball = userFavouriteSport === "Баскетбол";

    let capital = "";

    if (userCity === "Киев" || userCity === "Київ") {
        capital = "столице Украины";
    } else if (userCity === "Вашингтон") {
        capital = "столице США";
    } else if (userCity === "Лондон") {
        capital = "столице Великобритании";
    }

    let message = `Твой возраст: ${age}\n`;

    if (capital) {
        message += `Ты живешь в ${capital}\n`;
    } else {
        message += `Ты живешь в городе ${userCity}\n`;
    }

    if (isChess) {
        message += "Круто! Хочешь стать Магнусом Карлсеном?";
    } else if (isFootball) {
        message += "Круто! Хочешь стать Криштиану Роналду?";
    } else if (isBasketball) {
        message += "Круто! Хочешь стать Майклом Джорданом?";
    } else {
        message += `Твой любимый спорт — ${userFavouriteSport}`;
    }

    alert(message);
}

userData()