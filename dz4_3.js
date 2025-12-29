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